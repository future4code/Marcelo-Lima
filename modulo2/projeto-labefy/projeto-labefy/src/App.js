import React from "react";
import MainPage from "./components/MainPage";
import DetailsPlaylist from "./components/DetailsPlaylist";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import facebook from "./components/img/facebook1.png"
import twitter from "./components/img/twitter1.png"
import instagram from "./components/img/instagram1.png"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const MainDiv = styled.div`
  background: rgb(138,109,158);
  background: radial-gradient(circle, rgba(138,109,158,1) 0%, rgba(231,34,34,1) 44%, rgba(163,122,65,1) 100%);
  height: 108vh;
  padding-bottom: 20px;
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
  button{
    margin: 0 auto;
        background: rgb(131,58,180);
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(142,0,0,1) 53%, rgba(163,122,65,1) 100%);
        color: white;
        border: none;
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border: none;
        overflow: hidden;
        cursor: pointer;
        border-radius: 5px;

    &::after {
        content: "";
        z-index: -1;
        background-color: hsla(0, 0%, 100%, 0.2);
        position: absolute;
        top: -50%;
        bottom: -50%;
        width: 1.25em;
        transform: translate3d(-525%, 0, 0) rotate(35deg);
    }

    &:hover::after {
        transition: transform 0.45s ease-in-out;
        transform: translate3d(200%, 0, 0) rotate(35deg);
    }
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
const Footer = styled.footer`
    background-color: black;
    color: white;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img{
      width: 50px;
      background-color: black;
    }
    h1{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

const DivImg = styled.div`
  img{
    margin: 10px;
  }
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
        <Footer>
            <h1>Labefy</h1>
            <DivImg>
              <img src={facebook}/>
              <img src={twitter}/>
              <img src={instagram}/>
            </DivImg>
            <p>© 2021 labefy</p>
        </Footer>
      </MainDiv>
    );
  }
}


export default App;
