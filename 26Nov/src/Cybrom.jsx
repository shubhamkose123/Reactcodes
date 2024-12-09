import { useContext } from "react";
import { myContext } from "./UserContext";
const Cybrom=()=>{
    const {user, setUser}= useContext(myContext);
    return(
      <>
      <h1>WelCome To Cybrom  : {user}</h1>
      <button onClick={()=>{setUser("Raju")}}>Click Here</button>
      </>
    )
  }
  export default Cybrom;