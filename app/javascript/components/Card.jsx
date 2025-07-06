import React from "react";
import style from '../../assets/stylesheets/Card.module.css'

export default function Card({imageUrl,name}){
  return (<div className={style.card}>
    <img src={imageUrl} className={style.img}></img>
    <h1 className={style.name}>{name}</h1>
  </div>)

}