import { useContext } from "react";
import {myContext } from "./App";
const Comp5=()=>{
    const {name}= useContext(myContext)
    return(
        <>
       <h1>Comonent  :5 name:- {name} <br /></h1>
       <hr size="4" color="red" />
        </>
    )
}
export default Comp5;