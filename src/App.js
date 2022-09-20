import React from "react";
import { useState } from "react";
import { useRef } from "react";
import './app.css'
import Jumagul from "./jumagul";



export default function App() {
//    const users=[
//     {id:1,name:"Ozodbek",title:"dasturchi"},
//     {id:2,name:"Shaxzoda",title:"Tarixchi"},
//     {id:3,name:"Davron",title:"dasturchi"},
// ];
const users=[{id:1,name:"ozodbek",title:"programmist"},{id:2,name:"shaxzoda",title:"tarixchi"}]
const nameRef=useRef(null)
const titleRef=useRef(null)

const [item,qwertyu]=useState(users)
const [numberOne,stateNum]=useState(users.length+1);

const buttonClick = ()=>{
  qwertyu([...item,{id:numberOne,name:nameRef.current.value,title:titleRef.current.value}]);
  nameRef.current.value=" ";
  titleRef.current.value=" ";
  stateNum(numberOne+1);
}

  return(
    <div>
      {item.map((ir,index)=>{
        return(
          <p key={index}>{ir.id} {" | "} {ir.name} {" | "} {ir.title}</p>
        )
      })}

      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" placeholder="Name..." ref={nameRef}/>
        <input type="text" placeholder="Title..." ref={titleRef}/>
        <label>
          <button onClick={buttonClick}>Add Users</button>
        </label>
      </form>
      <Jumagul />
    </div>
  )
}