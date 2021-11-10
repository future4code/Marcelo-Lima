import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const estiloComentario = styled.p`
	display: flex;
	flex-direction: column;
`

export class SecaoComentario extends Component {
	state = {
		comentario: "",
		comentarios: [""],
	}

	onChangeComentario = (event) => {
		console.log("funcionou", this.state.comentario)
		this.setState({ comentario: event.target.value })
		this.setState({ comentarioUsuario: this.state.comentario })
	}

	alterar = (event) => {
		const valor = this.state.comentario
		this.setState(
			{
				comentario: "",
				comentarios: [...this.state.comentarios, valor]
			},
			() => { this.props.aoEnviar() }
		)

	}


	render() {
		let aparecerComentario
		if (this.props.aparecer === "true") {
			aparecerComentario =
				<>
					<InputComentario
						placeholder={'Comentário'}
						value={this.state.comentario}
						onChange={this.onChangeComentario}
					/>

					<button onClick={this.alterar}>Enviar</button>
				</>
		} else {
			const mostrarComentario = this.state.comentarios.map((item) => {
				return <p>{item}</p>
			})
			aparecerComentario = <estiloComentario>{mostrarComentario}</estiloComentario>

		}

		return <CommentContainer>
			{aparecerComentario}
			{/* <InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			
			<button onClick={this.alterar}>Enviar</button> */}
			<novoComentario />

		</CommentContainer>
	}
}




