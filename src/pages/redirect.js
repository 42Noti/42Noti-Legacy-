import React, { useEffect } from "react";
import { useRouter } from "next/router";
import qs from "query-string";
import instance from "@/pages/api/api";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    const test = async () => {
      const params = qs.parse(window.location.search);
      const code = params.code;
      try {
        const res1 = await instance.post(`/42oauth/token?code=${code}`);
        const res2 = await instance.post(`/auth/token/42seoul`, {
          ftAccessToken: res1.data.ftAccessToken,
        });
        localStorage.setItem("accessToken", res2.data.accessToken);
        instance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res2.data.accessToken}`;
        router.push("/todo-list");
      } catch (e) {
        alert("로그인 실패. 다시 로그인 해주세요!");
        router.push("/login");
      }
    };

    test();
    // 의존성 배열이 있을 때랑 없을 떄랑 호출하는 함수가 다름
    // https://junhyunny.github.io/javascript/react/jest/how-to-test-clean-up/
  }, []);
  return (
    <>
      <div className="redirect-container">
        <div className="redirect-box">
          <Box>
            <CircularProgress size="50px" />
          </Box>
          <h1>Now Loading...</h1>
        </div>
      </div>
      <style jsx>{`
        .redirect-container {
          display: flex;
          justify-content: center;
          height: 90%;
        }

        .redirect-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Redirect;
