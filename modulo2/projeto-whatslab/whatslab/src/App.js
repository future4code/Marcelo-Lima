import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { SecaoChat } from './componentes/SecaoChat'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
const DivMain = styled.div`
  display: flex;
  justify-content: center;
  
`
const Palavra = styled.p`
  padding: 0px 20px;
`

const Titulo = styled.div`
  width: 100%;
  height: 90vh;
  color: blue;
  /* border: 3px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

`


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 670px;
  border: 3px solid black;
`



class App extends React.Component {
  render() {
    return (
      <DivMain>
        <MainContainer>
          <GlobalStyle />
          <Titulo>
            <SecaoChat />
          </Titulo>
        </MainContainer>
      </DivMain>
    );
  }
}

export default App;
