import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiActivity, FiCpu, FiShield, FiZap, FiBarChart2, FiLayers } from 'react-icons/fi';
import NavigationBar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';
import Footer from '../components/Footer';

const Home = () => {
  const features = [
    {
      icon: <FiActivity size={32} />,
      title: "Real-time Monitoring",
      description: "Track your KPIs and metrics in real-time with zero latency data processing pipelines.",
      delay: 1
    },
    {
      icon: <FiCpu size={32} />,
      title: "AI-Driven Insights",
      description: "Leverage advanced machine learning models to predict trends and automate decision making.",
      delay: 2
    },
    {
      icon: <FiShield size={32} />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and granular role-based access control to keep your data safe.",
      delay: 3
    },
    {
      icon: <FiZap size={32} />,
      title: "Lightning Fast",
      description: "Optimized architecture ensures sub-millisecond response times even under heavy load.",
      delay: 4
    },
    {
      icon: <FiBarChart2 size={32} />,
      title: "Custom Dashboards",
      description: "Build fully customizable dashboards with drag-and-drop widgets and custom visualizations.",
      delay: 5
    },
    {
      icon: <FiLayers size={32} />,
      title: "Seamless Integration",
      description: "Connect with your favorite tools via our robust REST API and pre-built integrations.",
      delay: 6
    }
  ];

  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <NavigationBar />
      
      <main className="flex-grow-1">
        <HeroSection />

        {/* Features Section */}
        <section id="features" className="py-5 bg-dark position-relative">
          <Container className="py-5">
            <div className="text-center mb-5 pb-3 fade-in-up">
              <h2 className="display-5 fw-bold text-white mb-3">Powerful <span className="text-gradient">Features</span></h2>
              <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                Everything you need to scale your data operations, bundled into one powerful, easy-to-use platform.
              </p>
            </div>
            <Row className="g-4">
              {features.map((feature, index) => (
                <Col lg={4} md={6} key={index}>
                  <CardComponent {...feature} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
