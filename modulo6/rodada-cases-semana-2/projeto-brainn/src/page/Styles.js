import styled from "styled-components"

export const DivMain = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.color};
`

export const DivSelect = styled.div`
    /* background-color: ${(props) => props.color}; */
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DivNumbers = styled.div`background-color: white;
    height: 58vh;
    width: 100vw;
    border-top-left-radius:10%;
    border-top-right-radius:10%;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #EFEFEF;
    p{
        align-items: center;
        text-align: center;
        margin-top: 40px;
        font-size: 13px;
    }
`


export const DivBallNumber = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    border: none;
    border-radius: 50%;
    margin: 5px;
    width: 76px;
    height: 76px;
    background-color: #ffff;
`