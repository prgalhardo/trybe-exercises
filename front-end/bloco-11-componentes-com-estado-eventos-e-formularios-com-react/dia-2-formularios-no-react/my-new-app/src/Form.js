import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      idade: '',
      cidade: '',
      bandaFavorita: '',
      vaiComparecer: 'false',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Meu novo formulário!</h1>
        <form className='form'>
          Você gosta de rock?
          <hr />
          <fieldset>
          <select>
            <option>Sim</option>
            <option>Não</option>
          </select>
          </fieldset>
          <hr />
          <fieldset>
          Qual sua idade?
          <hr />
          <input type='number' name='idade' value={this.state.idade}
              onChange={this.handleChange} />
          <hr />
          Qual a sua cidade?
          <hr />
          <input type='text' name='cidade' value={this.state.cidade}
              onChange={this.handleChange}/>
          <hr />
          </fieldset>
          <label>
            Qual sua banda favorita?
            <hr />
            <textarea
              name='bandaFavorita'
              value={this.state.bandaFavorita}
              onChange={this.handleChange}
            />
          </label>
          <hr />
          <label>
          <input type='checkbox' name='vaiComparecer' checked={this.state.vaiComparecer}
              onChange={this.handleChange} />
          Vou comparecer ao show
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
