import React from 'react'
import { Link, useParams } from "react-router-dom";
import data from "./data";
import Navbar from './navbar';
export default function Home() {

    let k = useParams()
    let detail = data[k.id-1]
    console.log(detail.name)
    
    function verifyUser(e){
        let columnName = e.target.id;
        console.log(columnName)
    }

  return (
    <div>
        <Navbar id={k.id}/>
        <h1> {detail.name} </h1>
        <div className="container">
        <div class="outer">
            <h2 style={{textAlign : 'center'}}>Verification</h2>
            <div class="input-group mb-3 w-75 input">
              <input
                type="text"
                class="form-control"
                placeholder="User ID"
                id="name"
              />
            </div>

           
           
            <div class="d-grid gap-2 col-6 mx-auto buton">
                <button class="btn btn-info buton " id={detail.btnId} onClick={verifyUser} style={{color:'white'}} > Login </button> 
                
              </div>
           

          </div>
          </div>

    </div>
  )
}
