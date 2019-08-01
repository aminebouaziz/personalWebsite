import React, { Component } from "react";

import { Nav, Navbar } from "react-bootstrap";

export default class Navbarcom extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="brand">Amine Bouaziz's Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav navbar">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5" href="#features">
              Curriculum vitae
            </Nav.Link>
            <Nav.Link className="mr-5" href="#pricing">
              Projects
            </Nav.Link>
            <Nav.Link className="mr-5" href="#pricing">
              Achivement
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
