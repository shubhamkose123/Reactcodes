// Hooks use Contects
// contects Api
import { useState } from "react";
import Comp1 from "./Comp1";
import { createContext } from "react";
const myContext=createContext();
const App=()=>{
    const [name,setName]=useState("shubham");
    return(
        <>
        <h1>Welcome:- name:{name}</h1><hr size="4"color="red" />
        
        <myContext.Provider value={{name}}>
        <Comp1/>
        </myContext.Provider>
        </>
    )
}
export default App;
export {myContext};