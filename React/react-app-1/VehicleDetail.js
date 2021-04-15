// Min första React komponent...

const elem = React.createElement;

class VehicleDetail extends React.Component {
  constructor() {
    super();
  }

  render() {
    return elem('div', 'Hello from React!');
  }
}

const container = document.querySelector('#app');
ReactDOM.render(elem(VehicleDetail), container);
