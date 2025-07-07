import React from "react";

export default function WinDialog({timeFinished}){
  return(
    <dialog open>
      <h1>You Found All Characters</h1>
      <p>You finished in {timeFinished.toFixed(2)} seconds</p>
    </dialog>
  )
}