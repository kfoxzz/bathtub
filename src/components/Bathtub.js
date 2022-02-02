import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

function Bathtub({ opacityArray }) {
  const sections = [0, 1, 2, 3, 4];
  return (
    <Row>
      <Col>
        <div className="spacing-div"></div>
        {sections.map(section => {
          return (
            <Row className="water-container mx-auto" key={section} style={{ opacity: opacityArray[section] }}>
              <div className="water-div"></div>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
}

export default Bathtub;
