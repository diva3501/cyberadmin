import React from 'react'
import Navbar from './navbar';
import { Link, useParams } from "react-router-dom";
import { useState } from "react"
import data from "./data";
export default function Winner() {
    const [cyId,setCyId] = useState();
    let k = useParams()
    let detail = data[k.id-1]
    console.log(detail.name)

    function assertWinner(){

      let cyberId = document.getElementById("cyberId").value;
      

      console.log(cyberId);
      setCyId("");


    }


  return (
    
    <div>
        <Navbar id={k.id}/>
        <h1>{detail.name}</h1>
        
        <div className="container">
        <div class="outer">
            <h2 style={{textAlign : 'center'}}>Winners</h2>
            <select id="option" class="form-select">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  
</select>

<div class="input-group mb-3 w-75 input">
              <input
                type="text"
                class="form-control"
                placeholder="Cyber ID"
                id="cyberId"
                onChange= {(e)=>{
                  setCyId(e.target.value);
                }}
                value={cyId}
              />
            </div>

           
           
            <div class="d-grid gap-2 col-6 mx-auto buton">
                <button class="btn btn-info buton " o id={detail.btnId} onClick={assertWinner}  style={{color:'white'}} > ADD </button> 
                
              </div>
           

          </div>
          </div>

    </div>
  )
}
