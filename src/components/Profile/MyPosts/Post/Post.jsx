import React from "react";
import style from "./Post.module.css";

function Post(props) {
  return (
    <div className={style.item}>
      <div>
        <img src="https://media1.popsugar-assets.com/files/thumbor/6klHkWS_RYWKhuFlWDg3RMgizt4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/12/018/n/44701584/a34656aa8c78ee5a_GettyImages-467110446/i/Hot-Robert-Pattinson-Pictures.jpg" />
      <div key={props.id}>{props.message}</div>
      </div>
    </div>
  );
}

export default Post;
