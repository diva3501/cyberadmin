
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
    const firebaseConfig = {
      apiKey: "AIzaSyAnbY7MXL3JUZwa14QxJmU4vDIHzCOc0hg",
      authDomain: "cybernautix.firebaseapp.com",
      databaseURL: "https://cybernautix-default-rtdb.firebaseio.com",
      projectId: "cybernautix",
      storageBucket: "cybernautix.appspot.com",
      messagingSenderId: "1018018853789",
      appId: "1:1018018853789:web:bbf36a3af9c55e96167574",
      measurementId: "G-VHHGBHH2CL"
    };


    const app = initializeApp(firebaseConfig);
    return  getDatabase(app);
}

export default StartFirebase; 