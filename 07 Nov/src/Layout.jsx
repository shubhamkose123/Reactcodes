import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="Contact">Contact</Link>
        <hr size="4" color="red" />


        <Outlet/>

        <hr size="4" color="red"/>
        www.mycompany.com
        </>
    )
}
export default Layout;