// import "./style.css"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import hii from "./image/i1.jpeg";
// import hy from "./image/i2.png";
// import om from "./image/i3.jpg";
// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <br />
//       <Carousel>
//       <Carousel.Item>
//       <img src="public/img5/h1.avif" width="1530px" height="650px" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="public/img5/h2.avif" width="1530px" height="650px"/>

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//          <img src="public/img5/h3.avif" width="1530px" height="650px"/>

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     <br />
//     <div id="demo">
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={hii} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={hy} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={om} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </div>
//       </>
//   )
// }

import Banner from "./Componets/Banner";
import TopMenu from "./Componets/TopMenu";
import Home from "./Componets/Home";
// import Toggle from "./Componets/Toggle";
// import Example from "./Componets/Toggle";

const App=()=>{
  return(
    <>
    <TopMenu/>
     <aside  style={{marginLeft:"100px"}}>
    {/*<Example/> */}
    </aside>
    <Banner/>
    <Home/>
    </>
  )
}
export default App;


