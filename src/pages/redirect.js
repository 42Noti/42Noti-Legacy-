import React, { useEffect } from "react";
import { useRouter } from "next/router";
import qs from "query-string";
import instance from "./api/api";
import LoginService from "./api/LoginService";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { keyframes } from "styled-components";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    const getAccessToken = async () => {
      const params = qs.parse(window.location.search);
      let response;
      response = await LoginService.login42.issueAccessToken(params.code);
      response = await LoginService.login.issueAccessToken({
        ftAccessToken: response.data.ftAccessToken,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;
      router.push("/todo-list");
    };

    getAccessToken();
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
