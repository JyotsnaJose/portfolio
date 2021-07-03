import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
              <Navbar.Brand>
                <i className="fas fa-home"></i>
              </Navbar.Brand>
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavigationBar;
