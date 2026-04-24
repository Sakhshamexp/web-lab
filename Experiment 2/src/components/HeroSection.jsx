import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center position-relative min-vh-100 text-light bg-dark overflow-hidden">
      <div className="gradient-blob shape-1"></div>
      <div className="gradient-blob shape-2"></div>
      <Container className="position-relative z-1 pt-5 mt-5">
        <Row className="justify-content-center text-center">
          <Col lg={9} md={10}>
            <div className="badge bg-primary bg-opacity-10 text-primary mb-4 px-3 py-2 rounded-pill border border-primary border-opacity-25 d-inline-block fade-in-up">
              🚀 Powering the future of analytics
            </div>
            <h1 className="display-3 fw-bolder mb-4 fade-in-up delay-1 text-white">
              Unlock the Hidden Potential of <span className="text-gradient">Your Data</span>
            </h1>
            <p className="lead mb-5 fade-in-up delay-2 text-secondary px-md-5 fs-4">
              NexusAI seamlessly integrates with your workflow to provide real-time insights, predictive modeling, and intelligent automation.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 fade-in-up delay-3">
              <Button variant="primary" size="lg" className="rounded-pill px-5 py-3 fw-bold text-white shadow-lg glow-btn d-flex align-items-center justify-content-center">
                Start Free Trial <FiArrowRight className="ms-2" />
              </Button>
              <Button variant="outline-light" size="lg" className="rounded-pill px-5 py-3 fw-bold d-flex align-items-center justify-content-center">
                Watch Demo
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
