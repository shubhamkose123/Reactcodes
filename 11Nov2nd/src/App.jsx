import EmpData from "./EmpData"
import EmpDesign from "./EmpDesign"
const ans= EmpData.map((key)=><EmpDesign
empo={key.EmpId}
emnm ={key.Name}
empdeg ={key.City}
empsal={key.Fees}
/>
)
const App=()=>{
  return(
    <>
    <h1>Welcome to Cybrom</h1>
    <div id="empo">
     {ans}
    </div>
    </>
  )
}
export default App;