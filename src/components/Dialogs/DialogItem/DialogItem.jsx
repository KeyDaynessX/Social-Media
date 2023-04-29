import React from 'react'
import { Link } from 'react-router-dom';

let DialogItems = (props) => {
   return (
     <div>
      <div key={props.id}>{props.fullName}</div>
     </div>
   );
 };
export default DialogItems
