import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvar from '../../img/salvar-branco.png'
import iconeSalvarP from '../../img/salvar-preto.png'
import iconeCompartilhar from '../../img/compartilhar.png'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    salvo: false,
    comentando: false,
    numeroComentarios: 0,
    compartilhamento: false,

  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
    if (this.state.curtido) {
      this.setState({
        numeroCurtidas: 0
      })
    }
  }

  onClickSalvar = () => {
    console.log('Salvou!')
    this.setState({
      salvo: !this.state.salvo,
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => {
    console.log("compartilhou")
    this.setState({
      compartilhamento: !this.state.compartilhamento
    })
  }



  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })

  }

  render() {
    let iconeSalvo

    if (this.state.salvo) {
      iconeSalvo = iconeSalvarP
    } else {
      iconeSalvo = iconeSalvar
    }

    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} aparecer="true" />
    } else {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} aparecer="false" />

    }

    let componenteCompartilhar

    if (this.state.compartilhamento) {
      componenteCompartilhar = <SecaoCompartilhar aoEnviar={this.aoEnviarComentario} />
    }



    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvar}
        />


      </PostFooter>
      {componenteCompartilhar}
      {componenteComentario}
      {/* <div>TESTE</div> */}
    </PostContainer>
  }
}

export default Post