import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Example from './Toggle';
const TopMenu=()=>{
    return(
        <>
        <Container>
        <Navbar bg="black" data-bs-theme="dark" style={{border:"solid 4px red",borderRadius:"15px"}}>
          <Navbar.Brand href="#home"><img src="public/p1.png" width={30}/></Navbar.Brand>
          
          <Nav style={{marginLeft:"400px"}}>
            <Nav.Link href="#home"style={{color:"blue", fontSize:"25px"}}>Home</Nav.Link>
            <Nav.Link href="#about"style={{color:"blue",fontSize:"25px"}} >About</Nav.Link>
            <Nav.Link href="#conteat" style={{color:"blue",fontSize:"25px"}}><Example></Example></Nav.Link>
            <Nav.Link href="#sarvies" style={{color:"blue",fontSize:"25px"}}>Sarvies</Nav.Link>
          </Nav>
        
      </Navbar>
     
      </Container>
      <br />
        </>
    )
}
export default TopMenu;