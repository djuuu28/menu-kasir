// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#" className="home">
          <h className="a">ASRAR</h>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="ho">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="ab">
              About
            </Nav.Link>
            <NavDropdown
              title="Menu"
              className="men"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item id="#1">Food</NavDropdown.Item>
              <NavDropdown.Item id="#2">Drik</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Buy</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
