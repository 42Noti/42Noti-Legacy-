import React, { useEffect } from "react";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/todo-list");
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
