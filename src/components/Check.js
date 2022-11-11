import React from 'react'
import "../firebase.js"
import { useState } from 'react'
import { getDatabase, ref, child, get, update } from "firebase/database";


export default function Check() {
    const [id,setid]=useState("")
    function hi(e){
        e.preventDefault()
    }
    function check(){
        console.log(id)
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const db = getDatabase();
        
            update(ref(db,`/users/${id}`),{
                PythonCoding:1
               })
        }
        else {
            console.log("No data available 🤷‍♂🤷‍♂");
        }
}).catch((error) => {
  console.error(error);
});


setid("")

    }
  return (
    <div>
       <form onSubmit={hi}>
       <label>Id</label>
        <input type="text" value={id} onChange={(e)=>{setid(e.target.value)}} id="id"/>
        <button type='submit' onClick={check}>Check</button>
       </form>
    </div>
  )
}
