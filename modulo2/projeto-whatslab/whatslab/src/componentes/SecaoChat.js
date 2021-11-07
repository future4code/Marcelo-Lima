import React from 'react'
import styled from 'styled-components'


const InputUsuario = styled.input`
    width: 100px;
    border: 1px solid black;
    border-radius: 5px;
`
const InputMensagem = styled.input`
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
`

const EstiloTexto = styled.p`
    color: black;
`
const Container = styled.div`
  /* width: 45vw; */
  height: 2em;
  display: flex;
`

export class SecaoChat extends React.Component {

    state = {
        usuario: "",
        mensagem: "",
        nomeUsuario: "",
        mensagemChat: "",
        novaMensagem: [],
    }


    onClickEnviar = () => {
        console.log("funcionou")
        console.log("aquiii", this.state.nomeUsuario)
        console.log("olhaaa", this.state.mensagemChat)


        const newMensagem = {
            id: Date.now(),
            nameUser: this.state.nomeUsuario,
            messenger: this.state.mensagemChat,
        }
        const mensagemNova = [...this.state.novaMensagem, newMensagem]
        this.setState({
            usuario: "",
            mensagem: "",
            novaMensagem: mensagemNova,
        })
    }


    onChangeUsuario = (e) => {
        console.log("prestou", this.state.usuario)
        this.setState({ usuario: e.target.value })
    }

    onChangeMensagem = (e) => {
        console.log("coisou", this.state.mensagem)
        this.setState({ mensagem: e.target.value })
    }

    excluirMensagem = (id) => {

        const pergunta = window.confirm("Tem certeza que quer excluir a mensagem?")
        if (pergunta === true) {
            const excluir = this.state.novaMensagem.filter(mensagem => mensagem.id !== id)
            this.setState({ novaMensagem: excluir })
        } else {
        }
    }

    enviarEnter = (event) => {
        if (event.which == 13) {
            return this.onClickEnviar();
        }
    }

    render() {

        const imprimindoComponente = this.state.novaMensagem.map((item) => {
            return (
                <EstiloTexto onDoubleClick={() => { this.excluirMensagem(item.id) }}><b>{item.nameUser}</b>: {item.messenger}</EstiloTexto>
            )
        })

        return (
            <div>

                <div>{imprimindoComponente}</div>
                <Container >
                    <InputUsuario
                        placeholder={"Usuário"}
                        value={this.state.usuario}
                        onChange={this.onChangeUsuario}
                        onInput={(e) => this.setState({ nomeUsuario: e.target.value })}
                        onKeyPress={this.enviarEnter}
                    />
                    <InputMensagem
                        placeholder={"Mensagem"}
                        value={this.state.mensagem}
                        onChange={this.onChangeMensagem}
                        onInput={(e) => this.setState({ mensagemChat: e.target.value })}
                        onKeyPress={this.enviarEnter}
                    />
                    <button onClick={this.onClickEnviar}>Enviar</button>

                </Container>

            </div>
        )
    }
}