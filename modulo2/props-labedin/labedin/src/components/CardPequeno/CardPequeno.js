import React from 'react'
import styled from 'styled-components'


const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 40vw;
`

const NegritoTexto = styled.p`
    font-weight: bold;
`

const ImagemIcone = styled.img`

`

export default function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <ImagemIcone scr={ props.imagem } alt={props.nome}/>
            <NegritoTexto>{props.email}</NegritoTexto>
            <p>{props.meuEmail}</p>
            <ImagemIcone scr={props.imagem} alt={props.nome}/>
            <NegritoTexto>{props.endereco}</NegritoTexto>
            <p>{props.meuEndereco}</p>
        </CardPequenoContainer>
    )
}