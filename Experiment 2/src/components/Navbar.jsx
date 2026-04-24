import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FiHexagon } from 'react-icons/fi';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="py-3 shadow-sm custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center fw-bold fs-4 text-primary">
          <FiHexagon className="me-2 text-primary" size={28} /> NexusAI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-4">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#features" className="nav-link-custom">Features</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary" className="me-2 px-4 py-2 rounded-pill fw-semibold">Login</Button>
            <Button variant="primary" className="px-4 py-2 rounded-pill fw-semibold text-white shadow-sm glow-btn">Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
