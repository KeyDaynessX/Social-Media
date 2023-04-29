
import Messages from "./Message/Message";
import style from './Dialogs.module.css'
import { Outlet } from "react-router-dom";
import DialogItems from "./DialogItem/DialogItem";

function Dialogs() {
  let MessagesData = [
    { id: "1", message: "Hello World!" },
    { id: "2", message: "Hello World!" },
    { id: "3", message: "Hello World!" },
    { id: "4", message: "Hello World!" },
    { id: "5", message: "Hello World!" },
  ];
  let DialogsData = [
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
    { id: "3", fullName: "Noah Smith" },
    { id: "4", fullName: "David Johnson" },
    { id: "5", fullName: "Michael Williams" },
  ];

  let dialogsItems = DialogsData.map(data =>(<DialogItems fullName={data.fullName} key={data.id}/>))
  
  let messageElements = MessagesData.map(data =>(<Messages message={data.message} key={data.id}/>))

   return (
     <>
       <h1>Messages</h1>
       <div className={style.dialogs}>
         <div className={style.dialogItems}>
           {dialogsItems}
         </div>
         <div className={style.messages}>
           {messageElements}
         </div>
       </div>
       <Outlet />
     </>
   );
 }
 
 export default Dialogs;