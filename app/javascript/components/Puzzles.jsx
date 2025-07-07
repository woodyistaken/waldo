import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import style from '../../assets/stylesheets/Puzzles.module.css'
import Card from './Card'

 function Puzzles(){

  const [puzzles,setPuzzles]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  useEffect(()=>{
    const url = "/api/puzzles/index";
    setError(false)
    setLoading(true)
    fetch(url)
    .then((res)=>{
      if (res.ok) {
        return res.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(
      (res) => setPuzzles(res)
    )
    .catch((e)=>{
      setError(true)
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error Occured</div>
  }

  const puzzleList=puzzles.map((puzzle)=>{
    return<Link className={style.card} key={puzzle.id} to={`/puzzles/${puzzle.id}`}> <Card   imageUrl={puzzle.imageUrl} name={puzzle.name}/></Link>
  })
  return (
    <div className={style.background}>
      <div className={style.container}>
        <h1 className={style.heading}>Choose a Puzzle</h1>
        <div className={style.puzzleContainer}>
          {puzzleList}
        </div>
      </div>
    </div>
    )
}
export default Puzzles