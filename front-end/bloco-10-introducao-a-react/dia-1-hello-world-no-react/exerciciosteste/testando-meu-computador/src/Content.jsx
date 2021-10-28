import React, { Component } from 'react'

 class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <>
         {conteudos.map((value) => {
          return (
       <ol> 
            <li>O conteúdo é: {value.conteudo}</li>
          <li>O status é: {value.status}</li>
          <li>O bloco é: {value.bloco}</li>
       </ol>)
         })
         }
      </>
    )
  }
}

export default Content
