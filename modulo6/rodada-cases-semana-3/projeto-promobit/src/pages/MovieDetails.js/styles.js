import styled from "styled-components";


export const DivPage = styled.div`
    background-color: #F3F3F3;
`

export const DivMain = styled.div`
    height: 600px;
    background-color: #2D0C5E;
    display: flex;
    justify-content: center;
`

export const DivContainer = styled.div`
    width: 85%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

export const PosterImg = styled.img`
    max-width: 383px;
    border-radius: 5px;
    transform: scale(1.2);
    margin-top: 60px;
`

export const DivInfo = styled.div`
    margin-left: 70px;
    h2{
        color: #ffff;
    }
    p{
        color: #ffff;
    }
    div{
        
    }
    h3{
        color: #ffff;
    }
`

export const DivCredits = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const DivCasts = styled.div`
    margin: auto;
    margin-top: 60px;
    width: 90%;
    max-width: 1080px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
   background-color: #DDDDDD; 
    border-radius: 5px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #ADADAD; 
    border-radius: 10px;
    }
    /* Handle on hover */
    /* ::-webkit-scrollbar-thumb:hover {
    background: #ADADAD; 
    } */
    div{
        display: flex;
    }
`

export const ImgCasts = styled.img`
    max-width: 175px;
    margin: 5px;
`

export const DivCardCasts = styled.div`
    background-color: #ffff;
    box-shadow: 2px 4px 7px 0px grey;
    display: flex;
    flex-direction: column;
    margin: 5px;
    max-width: 191px;
    border-radius: 3px;
    p{
        margin: 5px 5px;
    }
`

export const DivTrailer = styled.div`
    margin: auto;
    margin-top: 40px;
    width: 90%;
    max-width: 1080px;
    iframe{
        width: 70%;
        height: 40vh;
    }
`

export const DivRecommendations = styled.div`
    margin: auto;
    margin-top: 40px;
    width: 90%;
    max-width: 1080px;
    overflow: auto;
    ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
   background-color: #DDDDDD; 
    border-radius: 5px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #ADADAD; 
    border-radius: 10px;
    }
    /* Handle on hover */
    /* ::-webkit-scrollbar-thumb:hover {
    background: #ADADAD; 
    } */
    div{
        display: flex;
    }
`

export const DivCardRecommendations = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`

export const ImgRecommendations = styled.img`
    max-width: 175px;
    border-radius: 5px;
`

export const TextDate = styled.p`
    color: #646464;
    font: bold;
    font-size: 14px;
`