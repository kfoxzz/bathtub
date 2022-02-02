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

  const setWaterConfig = (opacity, waterLevel) => {
    setOpacityArray(opacity);
    setWaterLevel(waterLevel);
  };

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
              setWaterConfig([0, 0, 0, 0, 1], 20);
              break;
            case 1:
              setWaterConfig([0, 0, 0, 1, 1], 40);
              break;
            case 2:
              setWaterConfig([0, 0, 1, 1, 1], 60);
              break;
            case 3:
              setWaterConfig([0, 1, 1, 1, 1], 80);
              break;
            case 4:
              setWaterConfig([1, 1, 1, 1, 1], 100);
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
              setWaterConfig([0, 1, 1, 1, 1], 80);
              break;
            case 1:
              setWaterConfig([0, 0, 1, 1, 1], 60);
              break;
            case 2:
              setWaterConfig([0, 0, 0, 1, 1], 40);
              break;
            case 3:
              setWaterConfig([0, 0, 0, 0, 1], 20);
              break;
            case 4:
              setWaterConfig([0, 0, 0, 0, 0], 0);
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
      <Row className="text-center py-3">
        <Col>
          <a href="https://www.flaticon.com/free-icons/bath" title="bath icons">
            Bath icons created by Payungkead - Flaticon
          </a>
          <hr />
          <h1 className="display-1">🛁 Interactive Bathtub 🛁</h1>
          <hr />
        </Col>
      </Row>
      <BathtubBackground />
      <Bathtub opacityArray={opacityArray} />
      <Buttons increaseWaterLevel={increaseWaterLevel} decreaseWaterLevel={decreaseWaterLevel} />
      <WaterLevel waterLevel={waterLevel} waterState={waterState} />
    </Container>
  );
}

export default App;
