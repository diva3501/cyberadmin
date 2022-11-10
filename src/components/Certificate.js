import React, { useEffect, useState } from 'react'
import {db} from "../firebase.js"
import { getDatabase, ref, child, get } from "firebase/database";

export default function Certificate() {
  const [data,setdata]=useState()
  const [allow,setallow]=useState(false)
const dbRef = ref(getDatabase());

useEffect(() => {
  get(child(dbRef, 'users')).then((snapshot) => {
  
    if (snapshot.exists()) {
      let x=snapshot.val()
      let a = Object.values(x);
     setdata(a)

    
     
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}, [])




if(data) return (
    <div>
      {
       (data.map((data)=>{
        return <div>
          <p>{data.Name}</p>
         
          
          <hr/>
        </div>
        }))
      }
    </div>
  )
}
