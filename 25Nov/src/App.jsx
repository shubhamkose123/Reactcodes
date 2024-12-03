import { createContext, useState } from "react";
import Cybrom from "./Cybrom";
const myContext= createContext();
const App=()=>{
  const[user, setUser]=useState("shubham")
  return(
    <>
    <h1>WelCome to my App: {user}</h1>
    <button onClick={()=>{setUser("kose!")}}> Click here</button>
    <myContext.Provider value={{user, setUser}}>
    <Cybrom/>
    </myContext.Provider>
    </>
   
  )
}
export default App;
export{myContext};


