import React, { useState } from "react";
import Profile from "@/components/mypage/Profile";
import AttendanceInfo from "@/components/mypage/AttendanceInfo";
import { Divider } from "@mui/material";

const MyPage = () => {
  const [isWallet, setIsWallet] = useState(false);
  return (
    <>
      <div className="mypage-container">
        <div className="blank">
          <h1>User Info.</h1>
          <Divider />
          <Profile />
          <h1>Attendance Calendar</h1>
          <Divider />
          <h1>Wallet? {isWallet ? "👍" : "👎"}</h1>
        </div>
      </div>
      <style jsx>{`
        .mypage-container {
          display: flex;
          flex-direction: column;
          margin: auto;
          width: 80%;
        }

        .blank {
          margin-top: 5%;
        }

        h1 {
          color: #000000;
          text-shadow: 2px 2px 2px #dbdbdb;
        }

        // .card {
        //   margin-left: 10px;
        //   margin-right: 10px;
        //   background-color: #fef8fb;
        //   margin-bottom: 30px;
        //   transition: 0.5s;
        //   border: 0;
        //   border-radius: 20px;
        //   display: inline-block;
        //   position: relative;
        //   width: 100%;
        //   box-shadow: none;
        // }
      `}</style>
    </>
  );
};

export default MyPage;
