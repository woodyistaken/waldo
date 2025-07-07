import React from "react"
import style from './CorrectCircle.module.css'

export default function CorrectCircle({left,top}){
  return <div className={style.circle} style={{left:left, top:top}}>

  </div>
}