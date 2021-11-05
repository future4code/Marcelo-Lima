import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentario: "",
	}

	onChangeComentario = (event) => {
		console.log("funcionou", this.state.comentario)
		this.setState({ comentario: event.target.value })
		this.setState({ comentarioUsuario: this.state.comentario })
	}

	render() {
		const novoComentario = <p>{this.state.comentario}</p>

		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			
			<button onClick={this.props.aoEnviar}>Enviar</button>
			<novoComentario/>
		</CommentContainer>
	}
}