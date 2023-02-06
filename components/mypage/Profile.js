import React, { useState } from "react";
// import Image from "next/image";
import { Button } from "@mui/material";
import styles from "../../src/styles/mypage/mypage.module.css";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({
    intraID: "chanhyle",
    email: "chanhyle@student.42seoul.kr",
    blackholes: 110,
    photoURL:
      "https://cdn.intra.42.fr/users/e9b5e4a92782d715c9cf44819cce7695/chanhyle.jpg",
    intraLink: "https://profile.intra.42.fr/users/chanhyle",
  });

  return (
    <>
      <div>
        <img src={myInfo.photoURL} width="100" height="100" alt="intra_photo" />
      </div>
      <div className="profile-description">
        <h2 className="profile-name">{myInfo.intraID}</h2>
        <p className="profile-email">{myInfo.email}</p>
        <p className="profile-blackholes">{myInfo.blackholes}</p>
        <div style={{ paddingTop: "10px" }}>
          <Button
            style={{
              backgroundColor: "cornflowers",
              fontFamily: "ubuntu-regular",
            }}
            variant="contained"
            onClick={() =>
              window.open(
                `https://profile.intra.42.fr/users/chanhyle`,
                "_blank"
              )
            }
            type="button"
          >
            Intra profile
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
