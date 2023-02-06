import React from "react";
import Profile from "../../components/mypage/Profile";
import AttendanceInfo from "../../components/mypage/AttendanceInfo";
import styles from "../../src/styles/mypage/mypage.module.css";

const MyPage = () => {
  return (
    <div>
      <h1>User Info.</h1>
      <div>
        <Profile />
        <AttendanceInfo />
      </div>
    </div>
  );
};

export default MyPage;
