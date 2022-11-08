import { click } from '@testing-library/user-event/dist/click'
import React from 'react'
import './login.css'
import {  Redirect } from 'react-router'
import { useNavigate } from 'react-router';
export default function Login() {
    let navigate = useNavigate();
    function click(e){
        e.preventDefault();
        
        let username = document.getElementById('name').value;
        let password = document.getElementById('password').value;
        let id = 0;
        console.log(username,password)
        if(username == 'pyadmin' && password=='12345' ){
            id=1
        }
        else if(username == 'papadmin' && password=='12345'){
            id=2
        }
        

        console.log(id);
        navigate('/home/' + id)
       
    }


  return (
    <div>
 <h1 style={{textAlign : 'center'}}>ADMIN LOGIN</h1>
<div class="container div1">
      <div class="row">
        <div class="feature-box col-7"></div>


        <div class="login col-5">
          <div class="outer">
            <h2 style={{textAlign : 'center'}}>LOGIN</h2>
            
           
            
            <div class="input-group mb-3 w-75 input">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                id="name"
              />
            </div>

            <div class="input-group mb-3 w-75 flex-nowrap input">
              <input
                type="text"
                class="form-control"
                placeholder="Password"
                id="password"
              />
            </div>
           
            <div class="d-grid gap-2 col-6 mx-auto buton">
                <button class="btn btn-info buton " id='1' style={{color:'white'}} onClick={click}> Login </button> 
                
              </div>
           

          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
