import express from "express";
import path from "path";
import http from "http";
import cron from "node-cron";
import { createConnection, getCustomRepository } from "typeorm";

import env from "@modules/env";
import apiToken from "@modules/token.api";
import controller from "@controller/index";
import { tokenType } from "tokenType";

const app = express();
const port = env.port || 5000;

const token: tokenType = {
    eventToken: undefined,
    eventCreatedAt: undefined,
    examToken: undefined,
    examCreatedAt: undefined,
};

/*
    노드 크론으로 헤로쿠 서버를 잠들지 않게 20분 간격으로 깨워준다.
    헤로쿠 서버가 US 리전이여서 23시 - 14시 까지 돌려준다. (GMT 기준 08시 - 23시)
*/

if (env.nodeEnv === "production") {
    cron.schedule("*/20 23,0-14 * * *", () => {
        console.log("node-cron");
        http.get("http://ftalert.herokuapp.com/");
    });
}

createConnection()
    .then(() => console.log("🚀 DB Connected"))
    .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("index"));

// import axios from "axios";
import { EventRepo } from "@repository/event.repository";
// import { ExamRepo } from "@repository/exam.repository";
// import { getCustomRepository } from "typeorm";

// app.get("/test", async (req, res) => {
//     const token: tokenType = {
//         eventToken: undefined,
//         eventCreatedAt: undefined,
//         examToken: undefined,
//         examCreatedAt: undefined,
//     };
//     await apiToken(token);

//     await axios({
//         method: "get",
//         url: "https://api.intra.42.fr/v2/campus/29/events",
//         headers: { Authorization: `Bearer ${token.eventToken}` },
//     })
//         .then(async (value) => {
//             const eventRepo = getCustomRepository(EventRepo);
//             await value.data.map(async (event) => await eventRepo.createEvent(event));
//         })
//         .catch((err) => {
//             console.log(err);
//             console.log("\x1b[31m[Event] - 42 API 호출에 실패하였습니다.\x1b[m");
//         });

//     await axios({
//         method: "get",
//         url: "https://api.intra.42.fr/v2/campus/29/exams",
//         headers: { Authorization: `Bearer ${token.examToken}` },
//     })
//         .then(async (value) => {
//             const examRepo = getCustomRepository(ExamRepo);
//             await value.data.map(async (exam) => await examRepo.createExam(exam));
//         })
//         .catch((err) => {
//             console.log(err);
//             console.log("\x1b[31m[Exam] - 42 API 호출에 실패하였습니다.\x1b[m");
//         });

//     res.send("끝");
// });

/*
    42 API 토큰 발급 -> 이벤트 조회 -> 데이터 가공 -> 슬랙 출력
    최신 이벤트를 어떤식으로 알아내나?
    - 제일 최신 이벤트의 id값을 DB에 저장된 최신 id와 비교해서 알아낸다
    - 서버가 꺼지거나 재시작 되어도 최신 이벤트 id값은 유지된다.
*/

setInterval(async () => {
    apiToken(token)
        .then((res) => {
            console.log(res);
            controller(token);
        })
        .catch((err) => console.log(err));
}, 3000);

app.listen(port, () => {
    console.log(`======= ENV: ${env.nodeEnv} =======`);
    console.log(`🚀 App listening on the port ${port}`);
});
