import React, { useState } from "react";
import "./App.css";
import Function from "./components/Function";
import Display from "./components/Display";

function App() {
    const   Person={
        name:"John",
        age:35,
    }
        const [animals,setAnimals]=useState(["🐺","🦊","🦁","🐅","🐯","🐴","🦄","🦌","🦓"]);
   
    return(
       <div className="App">
    <fieldset>
        <legend>app.jsx</legend>

           
                
      <Function number={122}obj={Person} />
           {/* <Display animals={animals}/> */}

       </fieldset>
        </div>
    );
}

export default App;