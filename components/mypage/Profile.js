import React, { useState } from "react";
import { Button } from "@mui/material";
// import styles from "../../src/styles/mypage/mypage.module.css";

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
      <div className="mypage-profile">
        <div className="body">
          <div className="row">
            <div className="profile-image">
              <img
                src={myInfo.photoURL}
                width="100"
                height="100"
                alt="intra_photo"
              />
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
          </div>
        </div>
      </div>
      <style jsx>{`
        .mypage-profile {
          display: flex;
          justify-content: center;
        }
        h1 {
          color: #ffb6c1;
          text-shadow: 2px 2px 2px #dbdbdb;
        }

        .body {
          font-size: 14px;
          color: #424242;
          padding: 20px;
          font-weight: 400;
          background-color: pink;
        }

        .row {
          display: flex;
        }

        .profile-image {
          padding-right: 20px;
        }

        .profile-image img {
          border-radius: 50%;
          // @include profile-image-size($pc-img-size);
          border: 0px solid #fff;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }

        .profile-description {
        }
      `}</style>
    </>
  );
};

export default Profile;
