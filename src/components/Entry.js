import React from 'react'
import  "../firebase.js"
import { getDatabase, ref, set } from "firebase/database";
import { useState } from 'react';


export default function Database() {
const [id,setid]=useState("")
const [name,setname]=useState("")
const [contact,setcontact]=useState("")
function  write (e) {
  
  
   

   console.log(name,contact,id)
  const db = getDatabase();
  set(ref(db, 'users/' + id), {
    UID:id,
    Name:name,
    Contact:contact,
    isEntry:0,
    PythonCoding:0,
    PaperPresentation:0,
    SoloCompile:0,
    CaptureTheFlag:0,
    OptimizeCoding:0,
    isParticipate:0



  });
  setid("")
  setname("")
  setcontact("")

}

function prevent(e){
  e.preventDefault();
}
  return (
    <div>
       
      <form onSubmit={prevent}>
      <label>Unique Id</label>
      <input type="number" value={id} onChange={(e)=>setid(e.target.value)} id="num"/>
      <br/>
      <label>Name</label>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)} id="name"/>
      <br/>
      <label>Contact No</label>
      <input type="number" value={contact} onChange={(e)=>setcontact(e.target.value)} id="contact"/>
      <br/>
      <button onClick={write}>Submit</button>
      </form>
      
    </div>
  )
}
