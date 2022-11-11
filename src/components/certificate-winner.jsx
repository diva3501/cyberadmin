import React from 'react'
import Navbar1 from './navbar1';
import { useState, useEffect } from 'react';
import  "../firebase.js"
import { getDatabase, ref, child, get } from "firebase/database";

export default function CertificateWinner() {

    const [data, setData] = useState();
    const [name,setName] = useState();
    const [option,setOption] = useState('python-coding');

    useEffect(() => {
        console.log('trigger use effect hook');
        const dbRef = ref(getDatabase());
        get(child(dbRef, `winner/${option}`)).then((snapshot) => {
          if (snapshot.exists()) {
  
          //   console.log(snapshot.val());
              let x = snapshot.val();
              let arr =Object.values(x)
            //   console.log(arr)
              setData(arr);
              let arrName = []
              for(let i=0;i<3;i++){
                get(child(dbRef, `users/${arr[i]}`)).then((snapshot) => {
                  if (snapshot.exists()) {
          
                  //   console.log(snapshot.val());
                      let x = snapshot.val();
                      let arr1 =Object.values(x)
                      let obj = {
                        id : arr[i],
                        name : arr1[2]
                      }
                      arrName.push(obj)
                      
                      
                   
                  
                  } else {
                    console.log("No data available");
                    alert("No data available")
                  }
                }).catch((error) => {
                  console.error(error);
                });
              }
              setName(arrName)
              
           
          
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        
       
      },[option])


      const getName = ()=>{
        // console.log(data)
        console.log(name)
      }

      // const getName = ()=>{
      //   console.log(data)
      //   console.log(option)

      //   console.log('trigger User Click');
      //   const dbRef = ref(getDatabase());
      //   let arrName = []
      //   for(let i=0;i<3;i++){
      //   get(child(dbRef, `users/${data[i]}`)).then((snapshot) => {
      //     if (snapshot.exists()) {
  
      //     //   console.log(snapshot.val());
      //         let x = snapshot.val();
      //         let arr =Object.values(x)
      //         arrName.push(arr[2])
              
              
           
          
      //     } else {
      //       console.log("No data available");
      //       alert("No data available")
      //     }
      //   }).catch((error) => {
      //     console.error(error);
      //   });
      // }
      
      // setName(arrName);


      // }

      // useEffect(() => {
      //   console.log('trigger use effect hook');
      //   const dbRef = ref(getDatabase());
      //   for(let i=0;i<3;i++){
      //   get(child(dbRef, `users/${data[i]}`)).then((snapshot) => {
      //     if (snapshot.exists()) {
  
      //     //   console.log(snapshot.val());
      //         let x = snapshot.val();
      //         let arrName =Object.values(x)
      //         console.log(arrName)
      //         // setData(arr);
              
           
          
      //     } else {
      //       console.log("No data available");
      //     }
      //   }).catch((error) => {
      //     console.error(error);
      //   });
      // }
       
      // },[data])

      if (data) return  (
    <div>
        <Navbar1/>
        <div className="container" style={{marginTop : '10%'}}>
        <select class="form-select" onChange={(e)=>{
            setOption(e.target.value)
         
        }} aria-label="Default select example">
 
 <option value="python-coding">Python Coding</option>
 <option value="paper-presentation">Paper Presentation</option>
 <option value="3">Good</option>
</select>
   

        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Place</th>
      <th scope="col">Cyber ID</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>First</td>
      <td>Otto</td>
      
    </tr>
    <tr>
     
      <td>Second</td>
      <td>Thornton</td>
      
    </tr>
    <tr>
  
      <td>Third</td>
      <td>the Bird</td>
      
    </tr>
  </tbody>
</table>

<button onClick={getName} >Click Me</button>

</div>
    </div>
  )
}
