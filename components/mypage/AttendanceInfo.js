import React, { useState } from "react";

const AttendanceInfo = () => {
  const [isWallet, setIsWallet] = useState(false);
  return (
    <>
      <h2>3개월 출석 정보</h2>
      <h2>월렛 획득 여부 : {isWallet ? "👍" : "👎"}</h2>
    </>
  );
};

export default AttendanceInfo;
