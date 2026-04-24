import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ icon, title, description, delay }) => {
  return (
    <Card className={`h-100 border-0 feature-card bg-dark text-light p-4 shadow-sm fade-in-up delay-${delay}`}>
      <Card.Body className="d-flex flex-column">
        <div className="icon-wrapper mb-4 text-primary bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center rounded-3 p-3">
          {icon}
        </div>
        <Card.Title className="fw-bold fs-4 mb-3">{title}</Card.Title>
        <Card.Text className="text-secondary flex-grow-1 fs-5">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
