import React from 'react';
import styled from 'styled-components'



const BigcardCountainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImagemBigCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const H4BigCardContainer = styled.h4 `
    margin-bottom: 15px;
`

const DivBidCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`


function CardGrande(props) {
    return (
        <BigcardCountainer>
            <ImagemBigCard src={ props.imagem } alt={props.nome} />
            <DivBidCardContainer>
                <H4BigCardContainer>{ props.nome }</H4BigCardContainer>
                <p>{ props.descricao }</p>
            </DivBidCardContainer>
        </BigcardCountainer>
    )
}

export default CardGrande;