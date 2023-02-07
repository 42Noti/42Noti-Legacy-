import React from "react";
import Profile from "../../components/mypage/Profile";
import AttendanceInfo from "../../components/mypage/AttendanceInfo";
import styles from "../../src/styles/mypage/mypage.module.css";

const MyPage = () => {
  return (
    <>
      <div className="mypage-container">
        <h1>User Info.</h1>
        <Profile />
        <AttendanceInfo />
      </div>
      <style jsx global>{`
        .mypage-container {
          display: flex;
          flex-direction: column;
          margin: auto;
          width: 80%;
        }

        h1 {
          color: #ffb6c1;
          text-shadow: 2px 2px 2px #dbdbdb;
        }

        card {
          margin-left: 10px;
          margin-right: 10px;
          background-color: #fef8fb;
          margin-bottom: 30px;
          transition: 0.5s;
          border: 0;
          border-radius: 20px;
          display: inline-block;
          position: relative;
          width: 100%;
          box-shadow: none;
        }

        profile-header {
          position: relative;
        }
      `}</style>
    </>
  );
};

export default MyPage;
