import React from 'react';
import BathtubBackground from './BathtubBackground';
import { Row, Col } from 'react-bootstrap';

function Bathtub(props) {
  return (
    <Row>
      <Col>
        <div className="spacing-div"></div>
        <Row className="water-container mx-auto">
          <div className="water-div"></div>
        </Row>
        <Row className="water-container mx-auto">
          <div className="water-div"></div>
        </Row>
        <Row className="water-container mx-auto">
          <div className="water-div"></div>
        </Row>
        <Row className="water-container mx-auto">
          <div className="water-div"></div>
        </Row>
        <Row className="water-container mx-auto">
          <div className="water-div"></div>
        </Row>
      </Col>
    </Row>
  );
}

export default Bathtub;
