import React from "react"
import { useRef } from "react"
import style from '../../assets/stylesheets/Dropdown.module.css'


export default function Dropdown({puzzle_id,characters,left,top,closeDropdown,relativeMousePos,setCorrectCircle}){
  const selectNode=useRef()
  function sendCheckCoords(event){
    const url="/api/puzzles/checkCoords"
    const body={
      left:relativeMousePos[0],
      top:relativeMousePos[1],
      puzzle_id: puzzle_id,
      character_id:Number(selectNode.current.value),
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
      if(response.correct){
        setCorrectCircle(response.coords)
      }
    })
    .catch((error) => console.log(error.message));
  }

  return <div className={style.container} style={{left:left, top:top}}>
    <form>
      <select ref={selectNode}>
        {characters.map((character)=>{
          return <option key={character.id} value={character.id} >{character.name}</option>
        })}
      </select>
      <button type="button" onClick={()=>{
        closeDropdown();
        sendCheckCoords();
      }}>Submit</button>
    </form>
  </div>
}