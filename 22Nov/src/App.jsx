// Hooks use Contects
import { useState } from "react";
import Comp1 from "./Comp1";
const App=()=>{
  const [name ,setName]=useState("shubham");
  return(
    <>
   <h1>Welcome:{name}</h1>
   <hr size="4"color="red" />
   <Comp1 user={name}/>
   <hr size="4"color="red" />
    </>
    
  )
}
export default App;