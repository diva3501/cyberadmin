import React ,{ useState , useEffect } from 'react'
import  "../firebase.js"
import { getDatabase, ref, child, get } from "firebase/database";


export default function Retrieve() {

    const [data, setData] = useState();

    useEffect(() => {
      console.log('trigger use effect hook');
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/`)).then((snapshot) => {
        if (snapshot.exists()) {

        //   console.log(snapshot.val());
            let x = snapshot.val();
            let arr =Object.values(x)
            // console.log(arr)
            setData(arr);
            
         
        
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      
     
    },[])

 if (data) return (
    <div>
        {
        (data.map((data)=>{
            return <div>
              <p>{data.Name}</p>
             
              
              <hr/>
            </div>
            }))}
    </div>
  )
}
