import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { BrowserRouter as Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import Home from "./Home";

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          // bg="dark"
          className="nav-color"
          variant="dark"
          fixed="top"
        >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>JJ</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/projects">
                  <Nav.Link>Projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                {/* <Nav.Link eventKey="1" as={Link} to="/about">
                About
              </Nav.Link> */}
                {/* <Nav.Link eventKey="2" as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/contact">
                Contact
              </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavigationBar;
