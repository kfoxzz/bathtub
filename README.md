# Interactive Bathtub

This is a simple project which displays an interactive bathub. Users can either fill or empty the bathtub, and the current water level is displayed.

Technologies used are React and React-Bootstrap.

## Logic

The bathtub area in which the water 'fills' is a column of five 20-pixel divs. These divs are rendered dynamically, with the opacity changed from 0 to 1 as the water fills. We use an array of the numbers 0 through 4 to render five divs (and to have a reusable array so that we can configure the opacity of the divs in the correct order).

```
const sections = [0, 1, 2, 3, 4];

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
```

An array is used to configure the opacity of the divs, to give the illusion of water filling and emptying. All divs are initialized with an opacity of 0.

Initial state of opacity for each of the divs:

```

const [opacityArray, setOpacityArray] = useState([0, 0, 0, 0, 0]);

```

Once a user clicks on a button to either fill or empty the bathtub, a switch statement within a setTimeout function is triggered to either 'empty' or 'fill' the tub, with each div being emptied or filled every 2 seconds.

Example of the switch statement which increases the water level:

```
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
```
