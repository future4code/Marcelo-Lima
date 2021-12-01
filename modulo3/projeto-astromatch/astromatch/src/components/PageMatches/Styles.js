import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 450px;
    border: 1px solid red;
`

export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 90%;
    button{
        height: 25px;
    }
    h3{
        padding-left: 45px;
    }
`

export const DivMatchProfile = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    img{
        width: 35px;
        height: 35px;
        border-radius: 100px;
    }
    p{
        width: 120px;
    }
`