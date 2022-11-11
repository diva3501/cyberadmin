import React from 'react'
import  "../firebase.js"
import { getDatabase, ref, set } from "firebase/database";
import { useState } from 'react';
import "./Cert.css"
import Button from 'react-bootstrap/Button';


export default function Database() {
const [id,setid]=useState("")
const [name,setname]=useState("")
const [contact,setcontact]=useState("")
function  write (e) {
  
  
   
    if(name.length !=0 && contact.length!=0 && id.length!=0){
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
else{
  alert("enter valid details")
}


    }
   
function prevent(e){
  e.preventDefault();
}
  return (
    <div>
       <h1>DATA ENTRY</h1>
      <form onSubmit={prevent} className="totfrm">
     
      <input required placeholder='Enter Unique Id' type="number" value={id} onChange={(e)=>setid(e.target.value)} className="frm fo" id="num"/>
      <br/>
      
      <input required placeholder='Enter Name' type="text" value={name} onChange={(e)=>setname(e.target.value)} className="frm ft" id="name"/>
      <br/>
      
      <input required placeholder='Enter Contact Number' type="number" value={contact} onChange={(e)=>setcontact(e.target.value)} className="frm fth" id="contact"/>
      <br/>
      <button className='btn ent' variant="primary" onClick={write}>Submit</button>
      </form>
     
      
    </div>
  )
}
