import React from "react";
import { Button, Image } from "react-bootstrap";
import style from "./ProfilleInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

function ProfileInfo() {
  return (
    <div className={style.profileInfo}>
      <div className={style.relative}>
        <Image
          className={style.profileInfiioImgMain}
          src="https://th.bing.com/th/id/R.df770a15987f8406940d1dac43d3baa2?rik=MEq0Rl62fpXALg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-NK8pPgxghxI%2fUAo4ylLQ3SI%2fAAAAAAAAIuo%2fXX3bIjw2DBA%2fs1600%2fRobert%2bPattinson-4.jpeg&ehk=GqBPuopIMzJQHM%2bHlR7dYQcDHP23XGwMnRbvUd%2btK60%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          rounded
        />
        <div className={style.absolute}>
          <Image
            className={style.profileInfiioImg}
            src="https://www.onthisday.com/images/people/robert-pattinson-medium.jpg"
            alt=""
          />
        </div>
      </div>
      {/* <div className={style.statistics}>
        <FontAwesomeIcon
          icon={faListUl}
          size="2xl"
          style={{ color: "#ffffff" }}
          className={style.icons}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          size="2xl"
          style={{ color: "#ffffff" }}
          className={style.icons}
        />
        <FontAwesomeIcon
          icon={faBell}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        <button className={style.icons}>Light</button>
      </div> */}
    </div>
  );
}

export default ProfileInfo;
