import React from "react";
import Button from "@mui/material/Button";
import instance from "@/pages/api/api";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// global로 옮기기
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    intra: createColor("#2B65EC"),
    github: createColor("#424242"),
  },
});

const LoginButton = ({ type, disabled }) => {
  const requestLogin = () => {
    window.location.href = "https://api.42seoul.link/42oauth/authorize";
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          onClick={requestLogin}
          color={type === "Github" ? "github" : "intra"}
          sx={{ textTransform: "none", marginTop: 1 }}
          disabled={disabled}
        >
          <img
            src={type === "Github" ? "github_negative.png" : "42_negative.png"}
            alt="button-image"
          />{" "}
          Sign in with {type}
        </Button>
      </ThemeProvider>
      <style jsx>
        {`
          img {
            width: 23px;
            height: 23px;
            margin-right: 10px;
          }
        `}
      </style>
    </>
  );
};

export default LoginButton;
