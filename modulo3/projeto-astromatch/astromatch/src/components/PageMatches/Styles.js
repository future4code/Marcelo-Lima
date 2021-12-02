import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 468.8px;
    box-shadow: 0px 0px 8px 1px black;
    border-radius: 20px;
`

export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 90%;
    h3{
        padding-left: 65.6px;
    }
`

export const DivMatchProfile = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #5b99fc;
    margin: 2px;
    border-radius: 1px;
    :hover{
        background-color: #a3c7ff;
    }
    img{
        
        width: 35px;
        height: 35px;
        border-radius: 100px;
        display: flex;
        margin-left: 2px;
    }
    p{
        width: 200px;
    }
`
export const DivButton = styled.div`
    position: absolute;
    top: 410px;
`