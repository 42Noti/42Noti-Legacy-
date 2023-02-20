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
      const res1 = await instance.post(`/42oauth/token?${code}`);
      console.log(res1);
      const body = { ftAccessToken: res1.data.ftAccessToken };
      const res2 = await instance.post(`/auth/token/42seoul`, body);
      console.log(res2);
    };

    test();
    // router.push("/todo-list");
  });
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
