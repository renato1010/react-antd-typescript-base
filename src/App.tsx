import * as React from 'react';
import './App.css';
// antd Button
import { Button } from 'antd';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}

export default App;
