import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    /* margin-top: 100px; */
`

export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 90%;
    button{
        height: 25px;
    }
    h3{
        padding-right: 20px;
    }
`

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border: 1px solid red;
`

export const CardDiv = styled.div`
    /* margin: auto; */
    width: 250px;
    border: 1px solid black;
    position: relative;
    height: 350px;
    div{
        z-index: -1;
        background-image: url("https://images.tcdn.com.br/img/img_prod/637099/quadro_abstrato_cod_4437_2229_1_20201213204410.jpg");
        filter: blur(30px);
        height: 100%;
        width: 100%;
        position: absolute;
    }
    img{
        width: 100%;
        display: flex;
        max-height: 350px;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    }
    h3{
        position: absolute;
        top: 220px;
        left: 10px;
        color: white;
        text-shadow: 0px 0px 5px black;
    }
    p{
        position: absolute;
        top: 250px;
        left: 10px;
        color: white;
        text-shadow: 0px 0px 5px black;
    }
`

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 50px;
`

export const Button = styled.button`
`