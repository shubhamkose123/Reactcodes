import { BrowserRouter,Routes, Route } from "react-router-dom";
import Display from "./Display";
import Insret from "./Insret";
import Layout from "./Layout";
import Home from "./Home";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>} />
      <Route path="insret" element={<Insret/>} />
      <Route path="display" element={<Display/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;