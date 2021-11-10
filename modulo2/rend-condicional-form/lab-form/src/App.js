import React from "react";
import Etapa1 from "./componentes/Etapa1";
import Etapa2 from "./componentes/Etapa2";
import Etapa3 from "./componentes/Etapa3";
import Final from "./componentes/Final";
import styled from "styled-components";
import PerguntaFechada from "./componentes/componentesPerguntas/PerguntaFechada";


const DivContainer = styled.div`
    text-align: center;
`

const Butao = styled.button`
  margin-top: 10px;
`




class App extends React.Component {
  state = {
    etapa: 1,
    valorEscolhido: ""
  }

  proximaEtapa = () => {

    if (this.state.etapa === 1 ) {
      this.setState({ etapa: 2 })
    } else if (this.state.etapa === 2) {
      this.setState({ etapa: 3 })
    } else if (this.state.etapa === 3) {
      this.setState({ etapa: 4 })
    }
    console.log("aeeeew", this.state.etapa)
  }


  mudarValor = () => {
    this.setState({valorEscolhido: <PerguntaFechada>{this.state.valor}</PerguntaFechada>})
    console.log("será?", this.state.valorEscolhido)
  }

  render() {


    let paginaEscolhida;
    switch (this.state.etapa) {
      case 1:
        paginaEscolhida = <Etapa1 />;
        break;
      case 2:
        paginaEscolhida = <Etapa2 />;
        break;
      case 3:
        paginaEscolhida = <Etapa3 />
        break;
      case 4:
        paginaEscolhida = <Final />
        break;
      default:
        paginaEscolhida = <h1>AAAAAAAAAAAAAAAA</h1>
    }

    let aparecerBotao;
    if (this.state.etapa <= 3) {
      aparecerBotao = <Butao onClick={this.proximaEtapa}>Próxima etapa</Butao>
    }

    return (
      <DivContainer>
        {paginaEscolhida}
        {aparecerBotao}
      </DivContainer>
    )
  }
}
export default App;
