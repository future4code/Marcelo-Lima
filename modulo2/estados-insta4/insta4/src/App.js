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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Goku'}
          fotoUsuario={'https://pbs.twimg.com/profile_images/1078278632290832386/nOeGNCpC_400x400.jpg'}
          fotoPost={'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/dragon-ball-super-1200x900-1-640x480.jpg'}
        />
        <Post
          nomeUsuario={'Ash ketchum'}
          fotoUsuario={'https://img.quizur.com/f/img5e5545da203841.94955565.png?lastEdited=1582646751'}
          fotoPost={'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/pokemon-1200x900-1.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
