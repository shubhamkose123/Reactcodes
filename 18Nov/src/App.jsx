// import { useState ,useEffect} from "react";
// const App=()=>{
//   const [count ,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(() => {
//       setCount(count+1)
//     }, 1000);
//   })

//     return(
//         <>
//        <h1>My counter : {count}</h1>
        
//         </>
//     )
//   }
//   export default App;

// import { useState ,useEffect} from "react";
// const App=()=>{
//   const [count ,setCount]=useState(0);
//   useEffect(()=>{
//     setTimeout(() => {
//       setCount(count+1)
//     }, 3000);
//   },[]);

//     return(
//         <>
//        <h1>My counter : {count}</h1>
        
//         </>
//     )
//   }
//   export default App;

import { useState ,useEffect} from "react";
const App=()=>{
  const [cnt ,setCount]=useState(0);
  const [multi,setMulti]=useState(0);
  const mycounter=()=>{
    setCount(cnt+1);
  }
  useEffect(()=>{
    setMulti(cnt*2);
  },[cnt])

    return(
        <>
       <h1>My counter : {cnt}</h1>
       <h2>Multiplication : {multi}</h2>
       <button onClick={mycounter}>click here</button>
        </>
    )
  }
export default App;

