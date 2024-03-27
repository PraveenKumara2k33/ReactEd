import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {
const today=new Date();
  return (
    <Container fluid className='bg-danger-subtle title'>
        <Row className="g-4">
            <Col>
                <h5>Location</h5>
                <p>Chennai</p>
                <p>Salem</p>
                <p>Cuddalore</p>
            </Col>
            <Col>
                <h5>Contact Deatils</h5>
                <p>apk@gamil.com</p>
                <p>+9123478951</p>
                <p>1/77agar st, Cuddalore</p>
            </Col>
            <Col>
                <h5>Course</h5>
                <p>Java Full Stack Developer</p>
                <p>Web Development</p>
                <p>React Developer</p>
            </Col>
            <Col>
                <h5>Placement Company</h5>
                <p>Zoho</p>
                <p>CTS</p>
                <p>TCS</p>
            </Col>
        </Row>
        <footer className="text-center">
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    </Container>
  )
}

export default Footer