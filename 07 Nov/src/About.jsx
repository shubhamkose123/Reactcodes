import { Link, Outlet } from "react-router-dom";

const About=()=>{
    return(
        <>
        <h1>About Page</h1>
        on the teb, the galleries include items thaat are designed to 
        <br/> <br/>
        <table width="100%" border="1">
            <tr>
                <td>
                    <Link to="aboutcompany"> About Company</Link>
                    <br/> <br/>
                    <Link to="aboutproduct"> About Product</Link>
                    <br/> <br/>
                    <Link to="aboutservice"> About Service</Link>
                   

                </td>
            <td>
                 <Outlet/>

                 </td>

                 </tr>
        </table>

        </>
    )
}
export default About;