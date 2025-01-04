
import { useSelector, useDispatch } from "react-redux";
import { bgColorChange } from "./colorSlice";
import { useState } from "react";

const App=()=>{

   const bgcolor=useSelector((state)=>state.mycolor.bgcolor);
   const myDid=useDispatch();
   const [bgclr, setBgclr]=useState();
   return(
      <>
         <h1> Background Color Change</h1>
         Enter Color : <input type="text" value={bgclr} onChange={(e)=>{setBgclr(e.target.value)}} />
         <button onClick={()=>{myDid(bgColorChange({clr:bgclr}))}}>Click here</button>
         <br /> <br />
         <div style={{width:"500px", height:"200px",backgroundColor:bgcolor}}></div>
      
      </>
   )
}
export default App;