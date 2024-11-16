import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const Home=()=>{
    return(
        <>
          <Container>
          <div id='demo' style={{display:"grid", gridTemplateColumns:"auto auto auto"}}>
           
        <Card style={{ width: '18rem', border:"solid  2px red"}}>
      <Card.Img variant="top" src="public/h1.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{color:"blue"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"solid 2px aqua" }}>
      <Card.Img variant="top" src="public/h2.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{color:"blue"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',border:"solid 2px green" }}>
      <Card.Img variant="top" src="public/h3.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{color:"blue"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
    <div id="hy" style={{padding:"20px", display:"grid", gridTemplateColumns:"auto auto auto"}}>
    <Card style={{ width: '18rem',border:" solid 2px green" }}>
      <Card.Img variant="top" src="public/h1.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{color:"blue"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"solid 2px red" }}>
      <Card.Img variant="top" src="public/h2.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{color:"blue"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"solid 2px aqua" }}>
      <Card.Img variant="top" src="public/h3.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{color:"blue"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-danger">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <Table striped bordered hover size="sm" >
      <thead style={{color:"black"}}>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Shubham</td>
          <td>Kose</td>
          <td>Shubh</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Danish</td>
          <td>Shekh</td>
          <td>shekh</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Aaditya</td>
          <td>Jain</td>
          <td>jain</td>
        </tr>
      </tbody>
    </Table>
   
     
    </Container>
        </>
    )
}
export default Home;