import React from 'react'
import style from './Content.module.css'
import { Outlet } from 'react-router-dom'

function Content() {
  return (
    <div className={style.content}>
      <Outlet/>
   </div>
  )
}

export default Content