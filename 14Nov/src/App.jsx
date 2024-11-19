
// const App=()=>{
//   const display=()=>{
//     alert("Event examples!!!")
//   }
//   return(
//     <>
//     <h1>welcome to bhopal</h1>
//     <button onClick={display}> Click here!!!!</button>
//     </>
//   )
// }
// export default App;
// const App=()=>{
//   const myname=(nm)=>{
//     alert(`my name is : ${nm}`)
//   }
//   return(
//     <>
//     <h1>welcome to bhopal</h1>
//     <button onClick={()=>{myname("shubham")}}> Click here!!!!</button>
//     </>
//   )
// }
// export default App;
// const App=()=>{
//   const display=(nm, e)=>{
//     console.log(e);
//     alert(` Name : ${nm} Event : ${e.type}`)
//   }
//   return(
//     <>
//     <h1>welcome to bhopal</h1>
//     <button onClick={(e)=>{display("shubham", e)}}> Click here!!!!</button>
//     </>
//   )
// }
// export default App;
// const App=()=>{
//     const display=(e)=>{
//       alert("Hello friends Event : "+ e.type);
//     }
//   return(
//     <>
//     <h1>welcome to bhopal</h1>
//     <button onClick={display} > Click here!!!!</button>
//     </>
//   )
// }
// export default App;
// const App=()=>{
//   const myval=(e)=>{
//     console.log(e);
//     let nm= e.target.name;
//     let val=e.target.value;
//     alert("Name : "+ nm +"value : "+val);
//   }
// return(
//   <>
//   <h1 style={{color:"red"}}>welcome to bhopal</h1>
//   <button name="btn1" value="mybutton" onClick={myval} style={{backgroundColor:"blue", border:"solid 2px red", borderRadius:"2px"}}> Click here!!!!</button>
//   </>
// )
// }
// export default App;
const App=()=>{
  const getval=(e)=>{
    console.log(e);
    let nm=e.target.name;
    let val=e.target.value;
   console.log({nmae:nm})
  }
return(
  <>
  <h1 style={{color:"red"}}>welcome to bhopal</h1>
  <button type="text" name="city" onChange={getval}  style={{backgroundColor:"blue", border:"solid 2px red", borderRadius:"2px"}}> Click here!!!!</button>
  </>
)
}
export default App;