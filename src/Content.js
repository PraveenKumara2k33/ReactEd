import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Content = () => {
const logoUrl1='images/j1.jpg';
const logoUrl2='images/j2.jpg';
const logoUrl3='images/j3.jpg';
const logoUrl4='images/j4.jpg';
const logoUrl5='images/j5.jpg';
  return (
    <Container id='Course'>
        <h1 className='Course'>Course</h1>
        <Row className="g-4">
            <Col>
            <Card border="info" style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={logoUrl1}  
                width="80" 
                height="150"  />
            <Card.Body>
                <Card.Title>Java Course</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Check Out</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card border="info" style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={logoUrl2}  
                width="80" 
                height="150"  />
            <Card.Body>
                <Card.Title>HTML Course</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Check Out</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card border="info" style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={logoUrl3}  
                width="80" 
                height="150"  />
            <Card.Body>
                <Card.Title>React Course</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Check Out</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card border="info" style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={logoUrl4}  
                width="80" 
                height="150"  />
            <Card.Body>
                <Card.Title>Spring Boot Course</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Check Out</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card border="info" style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={logoUrl5}  
                width="80" 
                height="150"  />
            <Card.Body>
                <Card.Title>AWS Course</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Check Out</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card border="info" style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={logoUrl4}  
                width="80" 
                height="150"  />
            <Card.Body>
                <Card.Title>Python Course</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Check Out</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card border="info" style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={logoUrl5}  
                width="80" 
                height="150"  />
            <Card.Body>
                <Card.Title>E-Commerce Project Course</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Check Out</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card border="info" style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={logoUrl2}  
                width="80" 
                height="150"  />
            <Card.Body>
                <Card.Title>Next Js Course</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="outline-primary">Check Out</Button>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Content