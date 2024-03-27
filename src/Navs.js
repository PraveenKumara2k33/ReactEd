import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navs = () => {
  const logoUrl='images/Judo.jpg';
  return (
    <Navbar expand="lg" className="bg-body-secondary">
    <Container fluid>
      <img src={logoUrl}  
        width="50" 
        height="50" 
        alt="Logo"
        id='ing'
      /> 
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Course">Course</Nav.Link>
          <NavDropdown title="Project" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">React Task 1</NavDropdown.Item>
            <NavDropdown.Item href="#action4">React Task 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              React Project Ideas
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Navs