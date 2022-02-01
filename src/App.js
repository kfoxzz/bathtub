import React from 'react';
import './App.css';
import Bathtub from './components/Bathtub';
import Buttons from './components/Buttons';
import BathtubBackground from './components/BathtubBackground';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <h1 className="display-1">Interactive Bathtub</h1>
        </Col>
      </Row>
      <BathtubBackground />
      <Bathtub />
      <Buttons />
    </Container>
  );
}

export default App;
