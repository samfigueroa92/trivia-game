import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";

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
              <h3 className="home">Home</h3>
            </Nav.Link>
            <Nav.Link href="/about">
              <h3 className="about">About</h3>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
