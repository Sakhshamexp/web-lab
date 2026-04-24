import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiHexagon, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-5 mt-auto border-top border-secondary border-opacity-25">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center fw-bold fs-4 text-white mb-3">
              <FiHexagon className="me-2 text-primary" size={24} /> NexusAI
            </div>
            <p className="pe-lg-4">
              Empowering businesses with intelligent analytics and real-time data processing to drive growth and innovation.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-secondary hover-primary"><FiTwitter size={20} /></a>
              <a href="#" className="text-secondary hover-primary"><FiGithub size={20} /></a>
              <a href="#" className="text-secondary hover-primary"><FiLinkedin size={20} /></a>
            </div>
          </Col>
          <Col lg={2} md={6} className="ms-lg-auto">
            <h5 className="text-white mb-3 fw-bold">Product</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Features</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Pricing</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Use Cases</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Integrations</a></li>
            </ul>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="text-white mb-3 fw-bold">Company</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className="text-secondary text-decoration-none hover-white">About Us</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Careers</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Blog</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Contact</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-white mb-3 fw-bold">Legal</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Terms of Service</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary text-decoration-none hover-white">Cookie Policy</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5 pt-4 border-top border-secondary border-opacity-25">
          <Col className="text-center text-secondary small">
            &copy; {new Date().getFullYear()} NexusAI Inc. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
