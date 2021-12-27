import React from 'react'
import { useHistory } from 'react-router-dom'
import { StyledButton, DivMensageContainer, DivMainContainer } from './Styled'
import imgError from '../../components/img/imgError.png'

const ErrorPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return (
        <DivMainContainer>
            <DivMensageContainer>
                <h1>Alguma coisa deu errado!</h1>
                <h3>(Erro 404)</h3>
            </DivMensageContainer>
            <p><b>Desculpe, a página que você está procurando não foi encontrada.</b></p>
            <StyledButton
                onClick={goBack}
                type={'submit'}
                variant="contained"
                color="primary">Voltar para a página anterior</StyledButton>
        </DivMainContainer>
    )
}

export default ErrorPage