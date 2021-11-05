import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`




class App extends React.Component {

  state = {
    listaDePosts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Goku",
        fotoUsuario: "https://pbs.twimg.com/profile_images/1078278632290832386/nOeGNCpC_400x400.jpg",
        fotoPost: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/dragon-ball-super-1200x900-1-640x480.jpg",
      },
      {
        nomeUsuario: "Ash ketchum",
        fotoUsuario: "https://img.quizur.com/f/img5e5545da203841.94955565.png?lastEdited=1582646751",
        fotoPost: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/pokemon-1200x900-1.jpg",
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoPosts = [...this.state.listaDePosts, novoPost]
    this.setState({ listaDePosts: novoPosts })
    this.setState({ valorInputNomeUsuario: "" })
    this.setState({ valorInputFotoUsuario: "" })
    this.setState({ valorInputNomeUsuario: "" })
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {
    let listaPosts = this.state.listaDePosts.map((item) => {
      return <Post
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
      />
    })

    return (
      <MainContainer>
        <input
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Seu nome"}
        />
        <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Sua foto"}
        />
        <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Foto do seu post"}
        />
        <button onClick={this.adicionarPost}>Enviar</button>
        {listaPosts}
      </MainContainer>
    );
  }
}

export default App;
