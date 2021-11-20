import React from "react";
import MainPage from "./components/MainPage";
import DetailsPlaylist from "./components/DetailsPlaylist";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const MainDiv = styled.div`
  background: rgb(1,4,18);
  background: linear-gradient(90deg, rgba(1,4,18,1) 0%, rgba(14,22,22,1) 32%, rgba(14,13,13,1) 71%, rgba(14,0,0,1) 100%);
  height: 100vh;
  padding-bottom: 20px;
  footer{
    background-color: black;
    color: white;
    height: 300px;
  }
`

const MainContainer = styled.div`
  header{
    display: flex;
    align-items: center;
    color: white;
  }
  img{
    width: 120px;
  }
`

const DivTitle = styled.div`
  text-align: center;
  border-radius: 30px;
  margin: 10px auto;
  box-shadow: 0px 0px 50px rgb(131,58,180);
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  width: 200px;
  :hover{
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(142,0,0,1) 50%, rgba(163,122,65,1) 100%);
  }
  h1{
    font-size: 50px;
    font-style: italic;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const DivSec =styled.div`
  width: 120px;
`


class App extends React.Component {
  state = {
    control: 1,
    nameButton: "as playlists"
  }

  togglePage = () => {
    if (this.state.control === 1) {
      this.setState({
        control: 2,
        nameButton: "o inicio"
      })
    } else if (this.state.control === 2) {
      this.setState({
        control: 1,
        nameButton: "as playlists"
      })
    }
  }

  render() {
    return (
      <MainDiv>
        <GlobalStyle />
        <MainContainer>
          <header>
            <DivTitle>
            <h1>Labefy</h1>
            </DivTitle>
          </header>
          <button onClick={this.togglePage}>Ir para {this.state.nameButton}</button>
          {this.state.control === 1 ? <MainPage /> : <DetailsPlaylist />} 
        </MainContainer>
        <footer>
            <h1>SOU O FOOTER</h1>
        </footer>
      </MainDiv>
    );
  }
}


export default App;
