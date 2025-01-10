import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./counterSlice";


const App=()=>{
    const cnt = useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();
    return(
        <>
        
            <h1>Counter Program</h1>
            <h1>{cnt}</h1>
            <button onClick={()=>{dispatch(Increment())}}>Increment</button>
            <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
       
        
        </>
    )
}
export default App;