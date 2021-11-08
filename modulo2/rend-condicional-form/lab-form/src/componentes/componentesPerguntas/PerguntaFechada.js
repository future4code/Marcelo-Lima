import React from 'react'

export default class PerguntaFechada extends React.Component {
    state={
        valor:"",
    }

    render() {
        return (
            <div>
                <p>{this.props.pergunta}</p>
                <select>
                    <option value="ensino médio incompleto">{this.props.opcoes[0]}</option>
                    <option value="ensino médio completo">{this.props.opcoes[1]}</option>
                    <option value="ensino superior incompleto">{this.props.opcoes[2]}</option>
                    <option value="ensino superior completo">{this.props.opcoes[3]}</option>
                </select>
            </div>
        )
    }
}