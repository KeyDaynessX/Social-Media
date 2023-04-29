import React from "react";
import style from "./Messages.module.css";
import { Link, Outlet } from "react-router-dom";
import DialogItem from "../DialogItem/DialogItem";

let Messages = (props) => {
  return (
    <div>
      <div key={props.id}>
        {props.message}
      </div>
    </div>
  );
};

export default Messages
