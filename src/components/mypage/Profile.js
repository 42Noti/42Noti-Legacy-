import React, { useState } from "react";
import { Button } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({
    intraID: "chanhyle",
    blackholes: 108,
    photoURL:
      "https://cdn.intra.42.fr/users/e9b5e4a92782d715c9cf44819cce7695/chanhyle.jpg",
    intraLink: "https://profile.intra.42.fr/users/chanhyle",
  });

  const setBlackholeColor = (day) => {
    if (day >= 42) return "green";
    else if (day >= 10) return "orange";
    else if (day >= 0) return "red";
    else "none";
  };

  const setBlackholeIcon = (day) => {
    if (day >= 42)
      return (
        <SentimentSatisfiedAltIcon sx={{ marginTop: 4, marginRight: 1 }} />
      );
    else if (day >= 10)
      return (
        <SentimentDissatisfiedIcon sx={{ marginTop: 4, marginRight: 1 }} />
      );
    else if (day >= 0)
      return (
        <SentimentVeryDissatisfiedIcon sx={{ marginTop: 4, marginRight: 1 }} />
      );
    else <></>;
  };

  return (
    <>
      <div className="mypage-profile">
        <div className="profile card">
          <div className="profile-image">
            <img src={myInfo.photoURL} alt="intra_photo" />
          </div>
          <div className="profile-description">
            <h2>{myInfo.intraID}</h2>
            <div style={{ paddingTop: "10px" }}>
              <Button
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
        <div className="blackhole card">
          <h2>Black Hole Absorption</h2>
          <div className={setBlackholeColor(myInfo.blackholes) + " icon"}>
            {setBlackholeIcon(myInfo.blackholes)}
            {myInfo.blackholes >= 0 ? (
              <p>{myInfo.blackholes} days left</p>
            ) : (
              <p>You&#39;ve been absorbed by the Black Hole.</p>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        // PC default CSS
        .mypage-profile {
          justify-content: center;
          width: 100%;
        }

        h1 {
          color: #ffb6c1;
          text-shadow: 2px 2px 2px #dbdbdb;
        }

        .card {
          font-size: 12px;
          color: #424242;
          padding: 20px;
          margin: 5px;
          font-weight: 400;
          background-color: lightgray;
          border-radius: 20px;
        }

        .profile-header {
          position: relative;
        }

        .profile-image img {
          width: 140px;
          height: 140px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          border-radius: 50%;
          border: 0px solid #fff;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }

        .profile {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blackhole {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .profile-image {
          padding-right: 20px;
        }

        .profile-description {
        }

        .red {
          color: red;
          font-size: 25px;
        }
        .orange {
          color: orange;
          font-size: 25px;
        }
        .green {
          color: green;
          font-size: 25px;
        }

        .icon {
          display: flex;
        }

        // when tablet and pc
        // @media screen and (min-width: 480px) and (min-height: 600px) {
        //   flex-direction: row;
        //   .mypage-profile {
        //     display: flex;
        //     justify-content: center;
        //     width: 100%;
        //   }
        //   .profile-image img {
        //     width: 140px;
        //     height: 140px;
        //   }
        // }

        // @media screen and (min-width: 768px) and (min-height: 950px) {
        //   .mypage-profile {
        //     display: flex;
        //     justify-content: center;
        //     width: 100%;
        //   }
        //   .card {
        //     width: 50%;
        //   }

        //   .profile-image img {
        //     width: 140px;
        //     height: 140px;
        //   }
        // }
      `}</style>
    </>
  );
};

export default Profile;
