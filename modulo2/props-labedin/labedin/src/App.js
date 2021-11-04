import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import imagem from './components/img/eu.jpg';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const TituloH2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <MainContainer>
      <GlobalStyle/>
        <PageSectionContainer>
          <h2>Dados pessoais</h2>
          <CardGrande 
            imagem={imagem}
            nome="Marcelo" 
            descricao="Oi, eu sou o Marcelo. Sou aluno da Labenu. Adoro fazer os exercícios passados nas aulas da Labenu."
          />
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />
        </PageSectionContainer>
        <CardPequeno
          imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg" 
          email="Email:"
          meuEmail="marcelomaia@gmail.com"
        />
        <CardPequeno
          imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg" 
          endereco="Endereço:"
          meuEndereco="Rua da minha casa"
        />
        <PageSectionContainer>
          <TituloH2>Experiências profissionais</TituloH2>
          <CardGrande 
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
            nome="Labenu" 
            descricao="Futuro formando no curso web full stack Labenu!" 
          />
          <CardGrande 
            imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg" 
            nome="NASA" 
            descricao="Apontando defeitos." 
          />
        </PageSectionContainer>
        <PageSectionContainer>
          <TituloH2>Minhas redes sociais</TituloH2>
          <ImagemButton 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook" 
          />
          <ImagemButton 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          />        
        </PageSectionContainer>
    </MainContainer>
  );
}

export default App;
