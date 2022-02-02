import React from 'react';
import Button from './Button';
import { Row, Col } from 'react-bootstrap';

function Buttons(props) {
  const { increaseWaterLevel, decreaseWaterLevel } = props;

  return (
    <Row className="button-container">
      <Col className="d-flex justify-content-end">
        <Button title="Increase Water Level" onClick={increaseWaterLevel} />
      </Col>
      <Col className="d-flex justify-content-start">
        <Button title="Decrease Water Level" onClick={decreaseWaterLevel} />
      </Col>
    </Row>
  );
}

export default Buttons;
