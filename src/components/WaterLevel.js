import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

function WaterLevel({ waterLevel, waterState }) {
  const [message, setMessage] = useState('');

  // switch (waterState) {
  //   case 'filling':
  //     setMessage('Filling bathtub...');
  //     break;
  //   case 'emptying':
  //     setMessage('Emptying bathtub...');
  //   default:
  //     setMessage('');
  //     break;
  // }

  return (
    <Row className="text-center pt-3">
      <h2>
        Water level: {waterLevel} pixels / {waterLevel}%
      </h2>
      <h2 className="message">{waterState}</h2>
    </Row>
  );
}

export default WaterLevel;
