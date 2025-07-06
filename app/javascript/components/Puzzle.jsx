import React from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useState,useEffect,useRef } from "react";
import style from '../../assets/stylesheets/Puzzle.module.css'
import Dropdown from "./Dropdown";
import CorrectCircle from "./CorrectCircle";

export default function Puzzle(){
  const params=useParams()
  const [puzzle,setPuzzle]=useState([])
  const [characters,setCharacters]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const [mousePos,setMousePos]=useState([])
  const [relativeMousePos,setRelativeMousePos]=useState([])
  const [dropdownOpen,setDropdownOpen]=useState(false)
  const [correctCoords,setCorrectCoords]=useState([])
  const [win,setWin]=useState(false)
  const imageNode=useRef()
  useEffect(()=>{
    const url = `/api/puzzles/${params.id}`;
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
      (res) => setPuzzle(res)
    )
    .catch((e)=>{
      setError(true)
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])
  useEffect(()=>{
    const url = `/api/characters/${params.id}`;
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
      (res) => setCharacters(res)
    )
    .catch((e)=>{
      setError(true)
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])
  useEffect(()=>{
    const url="/api/puzzles/checkWin"
    const body={
      
      coords:correctCoords,
      puzzle_id: puzzle.id,
    }
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((response) => {
      console.log(response)
      
    })
    .catch((error) => console.log(error.message));
  },[correctCoords.length])


  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error Occured</div>
  }

  function handleClick(e){
    setDropdownOpen(true)
    let rect=e.target.getBoundingClientRect()
    setMousePos([`${e.pageX}px`,`${e.pageY }px`])
    setRelativeMousePos([(e.clientX-rect.left)/rect.width,(e.clientY-rect.top)/rect.height ])
  }

  function closeDropdown(){
    setDropdownOpen(false)
  }

  function setCorrectCircle(coords){
    setCorrectCoords([...correctCoords,coords])
  }
  const dropdown=<Dropdown puzzle_id={puzzle.id}characters={characters} left={mousePos[0]} top={mousePos[1]} relativeMousePos={relativeMousePos} closeDropdown={closeDropdown} setCorrectCircle={setCorrectCircle}/>
  return(
    <div className={style.background}>
      {dropdownOpen?dropdown:null}
      <div className={style.container}>
        <Link to="/puzzles">&lt; Back to Home</Link>
        
        <h1 className={style.heading}>{puzzle.name}</h1>
        <div className={style.stats}>
          <h1>Find all characters</h1>
          <h1>11:11</h1>
        </div>
        <div className={style.imgContainer}>
          <img className={style.img} src={puzzle.imageUrl} onClick={handleClick} ref={imageNode}></img>
          {correctCoords.map(([leftPercent,topPercent],index)=>{
            return <CorrectCircle key={index} left={leftPercent*imageNode.current.width/100} top={topPercent*imageNode.current.height/100}/>
          })}
        </div>
      </div>
    </div>
  )
}