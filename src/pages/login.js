import React from "react";
import LoginButton from "@/components/login/LoginButton";
import { Box } from "@mui/system";

const Login = () => {
  return (
    <>
      <div className="global-container">
        <div className="login-container">
          <Box sx={{ height: "30%" }}>
            <div className="title">로그인</div>
            <div className="subtitle">로그인할 계정을 선택하세요</div>
          </Box>
          <LoginButton type="42" />
          <LoginButton type="Github" disabled />
        </div>
      </div>
      <style jsx>{`
        .login-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 80%;
          height: 100%;
        }

        .title {
          font-size: 40px;
        }

        .subtitle {
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default Login;
