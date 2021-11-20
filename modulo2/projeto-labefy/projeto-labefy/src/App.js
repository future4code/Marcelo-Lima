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
  /* background: rgb(20,0,0);
  background: linear-gradient(90deg, rgba(20,0,0,1) 0%, rgba(0,0,23,1) 100%, rgba(0,212,255,1) 100%); */
  background: rgb(1,4,18);
  background: linear-gradient(90deg, rgba(1,4,18,1) 0%, rgba(14,22,22,1) 32%, rgba(14,13,13,1) 71%, rgba(14,0,0,1) 100%);
  height: 100vh;
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
  margin: auto;
  box-shadow: 0px 0px 50px rgb(131,58,180);
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  width: 150px;
  :hover{
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(142,0,0,1) 50%, rgba(163,122,65,1) 100%);
  }
  h1{
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
  }

  togglePage = () => {
    if (this.state.control === 1) {
      this.setState({
        control: 2
      })
    } else if (this.state.control === 2) {
      this.setState({
        control: 1
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
          <button onClick={this.togglePage}>Ir para as playlists</button>
          {this.state.control === 1 ? <MainPage /> : <DetailsPlaylist />}
        </MainContainer>
        <footer></footer>
      </MainDiv>
    );
  }
}


export default App;
