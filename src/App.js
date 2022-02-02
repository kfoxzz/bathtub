import React, { useState } from 'react';
import './App.css';
import Bathtub from './components/Bathtub';
import Buttons from './components/Buttons';
import BathtubBackground from './components/BathtubBackground';
import WaterLevel from './components/WaterLevel';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [waterLevel, setWaterLevel] = useState(0);
  const [opacityArray, setOpacityArray] = useState([0, 0, 0, 0, 0]);
  const [waterState, setWaterState] = useState(null);
  const [busy, setBusy] = useState(false);

  const sections = [0, 1, 2, 3, 4];

  const increaseWaterLevel = () => {
    if (waterLevel === 100) {
      setWaterState('Bathtub is already full!');
      return;
    }
    if (busy) {
      setWaterState('Please wait for action to be completed.');
      return;
    }
    if (!busy) {
      setWaterState('Filling bathtub...');
      setBusy(true);
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          switch (i) {
            case 0:
              setOpacityArray([0, 0, 0, 0, 1]);
              setWaterLevel(20);
              break;
            case 1:
              setOpacityArray([0, 0, 0, 1, 1]);
              setWaterLevel(40);
              break;
            case 2:
              setOpacityArray([0, 0, 1, 1, 1]);
              setWaterLevel(60);
              break;
            case 3:
              setOpacityArray([0, 1, 1, 1, 1]);
              setWaterLevel(80);
              break;
            case 4:
              setOpacityArray([1, 1, 1, 1, 1]);
              setWaterLevel(100);
              setWaterState('Bathtub is now full!');
              setBusy(false);
              break;
          }
        }, 2000 * (i + 1));
      }
    }
  };

  const decreaseWaterLevel = () => {
    if (waterLevel === 0) {
      setWaterState('Bathtub is already empty!');
      return;
    }
    if (busy) {
      setWaterState('Please wait for action to be completed.');
      return;
    }
    if (!busy) {
      setWaterState('Emptying bathtub...');
      setBusy(true);
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          switch (i) {
            case 0:
              setOpacityArray([0, 1, 1, 1, 1]);
              setWaterLevel(80);
              break;
            case 1:
              setOpacityArray([0, 0, 1, 1, 1]);
              setWaterLevel(60);
              break;
            case 2:
              setOpacityArray([0, 0, 0, 1, 1]);
              setWaterLevel(40);
              break;
            case 3:
              setOpacityArray([0, 0, 0, 0, 1]);
              setWaterLevel(20);
              break;
            case 4:
              setOpacityArray([0, 0, 0, 0, 0]);
              setWaterLevel(0);
              setWaterState('Bathtub is now empty!');
              setBusy(false);
              break;
          }
        }, 2000 * (i + 1));
      }
    }
  };

  return (
    <Container>
      <Row className="text-center">
        <Col>
          <h1 className="display-1">Interactive Bathtub</h1>
        </Col>
      </Row>
      <BathtubBackground />
      <Bathtub opacityArray={opacityArray} sections={sections} />
      <Buttons increaseWaterLevel={increaseWaterLevel} decreaseWaterLevel={decreaseWaterLevel} />
      <WaterLevel waterLevel={waterLevel} waterState={waterState} />
    </Container>
  );
}

export default App;
