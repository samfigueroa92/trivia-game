import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
            <img 
              src="https://www.trivia-app.com/Trivia-Logo_final.png"
              alt="trivia"
            />
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
