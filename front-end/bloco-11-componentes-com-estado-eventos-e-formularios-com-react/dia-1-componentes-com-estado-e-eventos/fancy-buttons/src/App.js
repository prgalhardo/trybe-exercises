import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)

    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }
  
  colorOfButton(valueOfButtons) {
    return (valueOfButtons %2 === 0) ? 'green' : 'white'
  }

handleClick1() {
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
  }), () => {console.log(this.colorOfButton(this.state.numeroDeCliques1))} )
}

handleClick2() {
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
  }), () => {console.log(this.colorOfButton(this.state.numeroDeCliques2))} )
}

handleClick3() {
  this.setState((estadoAnterior, _props) => ({
    numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
}), () => {console.log(this.colorOfButton(this.state.numeroDeCliques3))} )
}



  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
      return (
        <div>
        <button onClick={this.handleClick1} style={{backgroundColor: this.colorOfButton(numeroDeCliques1)}}>{this.state.numeroDeCliques1}</button>
        <button onClick={this.handleClick2} style={{backgroundColor: this.colorOfButton(numeroDeCliques2)}}>{this.state.numeroDeCliques2}</button>
        <button onClick={this.handleClick3} style={{backgroundColor: (numeroDeCliques3 %2 === 0) ? 'green' : 'white'}}>{this.state.numeroDeCliques3}</button>
        </div>
      )
    }
  }
export default App;
