import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

function WaterLevel({ waterLevel, waterState }) {
  return (
    <Row className="text-center pt-3">
      <h2>Water level: {waterLevel}%</h2>
      <h2 className="message">{waterState}</h2>
    </Row>
  );
}

export default WaterLevel;
