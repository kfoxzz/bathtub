import React from 'react';
import Button from './Button';
import { Row, Col } from 'react-bootstrap';

function Buttons() {
  const increaseWaterLevel = () => {
    console.log('filling bathtub');
  };

  const decreaseWaterLevel = () => {
    console.log('emptying bathtub');
  };

  return (
    <Row className="pt-5">
      <Col className="d-flex justify-content-center text-center">
        <Button title="Increase Water Level" onClick={increaseWaterLevel} />
      </Col>
      <Col className="d-flex justify-content-center text-center">
        <Button title="Decrease Water Level" onClick={decreaseWaterLevel} />
      </Col>
    </Row>
  );
}

export default Buttons;
