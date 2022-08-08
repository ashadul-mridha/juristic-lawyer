/* eslint-disable @next/next/no-img-element */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarWithDropDown() {
  return (
    <Navbar className="navbarHeader py-3" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/image/logo.png"
            alt="logo image"
            height={"50px"}
            width={"150px"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navbarHeader__item" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navbarHeader__item" href="#link">
              Shop
            </Nav.Link>
            <NavDropdown
              className="navbarHeader__item"
              title="Pages"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navbarHeader__item" href="#service">
              Services
            </Nav.Link>
            <Nav.Link className="navbarHeader__item" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="navbarHeader__item" href="#contacts">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWithDropDown;
