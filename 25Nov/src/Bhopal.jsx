import { myContext } from "./App";
import { useContext } from "react";
const Bhopal=()=>{
    const{user, setUser}= useContext(myContext);
    return(
      <>
      <h1>WelCome to bhopal:{user}</h1>
      <button onClick={()=>{setUser("shubham!!")}}>Click here</button>
      </>
    )
  }
  export default Bhopal;

