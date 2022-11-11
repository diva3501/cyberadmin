import React, { useEffect, useState } from 'react'
import {db} from "../firebase.js"
import { getDatabase,update, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./Cert.css"
import Navbar1 from './navbar1';
import Table from 'react-bootstrap/Table';


export default function CertificateParticipants() {
  const [data,setdata]=useState()
  const [allow,setallow]=useState()
const dbRef = ref(getDatabase());
const navigate = useNavigate();
useEffect(() => {
  get(child(dbRef, 'users')).then((snapshot) => {
  
    if (snapshot.exists()) {
      let x=snapshot.val()
      let a = Object.values(x);
      setdata(a)
      setallow()

    
     
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}, [allow]) 
function Suc(e){
  let id=e.target.id
  console.log(id)
  update(ref(db,`/users/${id}`),{
    isParticipate:2
   }) 
   setallow("hi")
   


  console.log(e.target.id)
}
function fail(e){
  let id=e.target.id
  console.log(id)
  update(ref(db,`/users/${id}`),{
    isParticipate:1
   }) 
   setallow("hi")

}

if(data) return (
  <div>
     <Navbar1/>
     <Table striped bordered hover className='certtb'>
     <thead>
        <tr>
          <th>Unique Id</th>
          <th>Name</th>
          <th>Python Coding</th>
          <th>Solo Compile</th>
          <th>Papper Presentation</th>
          <th>Papper Presentation</th>
          <th>Papper Presentation</th>
          <th>Papper Presentation</th>
          <th>Papper Presentation</th>

        </tr>
      </thead>
      {
       (data.map((data)=>{
        if(data.isParticipate>=1) return <tbody className={data.isParticipate == 2 ? "act":"norm"}>
        <tr >
          <td>{data.UID}</td>
          <td>{data.Name}</td>
          <td>{data.PythonCoding=== 1 ? "YES":"NO"}</td>
          <td>{data.SoloCompile=== 1 ? "YES":"NO"}</td>
          <td>{data.PapperPresentation=== 1 ? "YES":"NO"}</td>
          <td>{data.OptimizeCoding=== 1 ? "YES":"NO"}</td>
          <td>{data.CaptureTheFlag=== 1 ? "YES":"NO"}</td>
          <td> <button className='btn o' id={data.UID}  onClick={Suc}>Given</button></td>
          <td><button className='btn t' id={data.UID} onClick={fail} >Not Given</button></td>
        
          {console.log(data.isParticipate)}

         
         </tr>
         </tbody>
          
          
       
        }))
      }
    </Table>

    </div>
  )
}
