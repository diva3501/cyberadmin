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
    uid:id,
    name:name,
    contact:contact


  });
  setid("")
  setname("")
  setcontact("")

}
function get(val){
  return document.getElementById(val).value;

}
function hi1(e){
  setid(e.target.value)

}
function hi2(e){
  setname(e.target.value)

}
function hi3(e){
  setcontact(e.target.value)

}
  return (
    <div>
    
      <label>Unique Id</label>
      <input type="number" value={id} onChange={(e)=>setid(e.target.value)} id="num"/>
      <br/>
      <label>Name</label>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)} id="name"/>
      <br/>
      <label>Contact No</label>
      <input type="number" value={contact} onChange={(e)=>setcontact(e.target.value)} id="contact"/>
      <br/>
        <button onClick={write}>jijo</button>
      
    </div>
  )
}
