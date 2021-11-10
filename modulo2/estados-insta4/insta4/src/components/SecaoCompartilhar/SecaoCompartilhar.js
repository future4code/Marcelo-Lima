import React from 'react'
import styled from 'styled-components'


const CompartilharContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
`

const IconeFacebook = styled.img`
    width: 10%;
    margin-right: 5px;
`

const IconeTwitter = styled.img`
    width: 10%;
    margin-right: 5px;
`

const IconeInstagram = styled.img`
    width: 10%;
    margin-right: 5px;
`
const InputCompartilhar = styled.input`
    width: 100%;
    margin-right: 5px;
`


export class SecaoCompartilhar extends React.Component {
	state = {
		compartilhar: ""
	}
    
    onClickFacebook = () => {
        console.log("Post compartilhado no Facebook com a mensagem:", this.state.compartilhar)
        this.setState({
            compartilhamento: this.state.compartilhamento = ""
        })
    }

    onClickInstagram = () => {
        console.log("Post compartilhado no Instagram com a mensagem:", this.state.compartilhar)
        this.setState({
            compartilhamento: this.state.compartilhamento = ""
        })
    }

    onClickTwitter = () => {
        console.log("Post compartilhado no Twitter com a mensagem:", this.state.compartilhar)
        this.setState({
            
            compartilhamento: this.state.compartilhamento = ""
        })
    }

	onChangeCompartilhar = (event) => {
		console.log("funcionou", this.state.compartilhar)
		this.setState({
			compartilhar: event.target.value
		})
	}

	render() {
		return <CompartilharContainer>
			<IconeFacebook onClick={this.onClickFacebook} src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png"/>

            <IconeTwitter onClick={this.onClickInstagram} src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"/>

            <IconeInstagram onClick={this.onClickTwitter} src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png"/>

            <InputCompartilhar
				placeholder={'Comentário'}
				value={this.state.compartilhamento}
				onChange={this.onChangeCompartilhar}
			/>
			{/* <button onClick={this.props.aoEnviar}>Enviar</button> */}
		</CompartilharContainer>
	}
}

