import React from 'react'
import { Link, useParams } from 'react-router-dom'

function User() {
   const {userId} = useParams();
  return (<>
   
      <h2>User: {userId}</h2>
      <Link to="/messages">Back to Users</Link>
      
 </>
  )
}

export default User;