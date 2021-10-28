import React, { Component } from 'react';

const name = <h1>Priscila</h1>;
const element = <p>Oi! Atualmente estou estudando Desenvolvimento de Web na Trybe, começando o módulo de Front-End e dando os primeiros passos no React!</p>

class Header extends Component {
  render() {
   return (
    <div>
    {name}
    {element}
    </div>
  )
  }
}

export default Header