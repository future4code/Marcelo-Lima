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
        padding-right: 60px;
    }
`

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    box-shadow: 0px 0px 8px 1px black;
    border-radius: 20px;
`

export const CardDiv = styled.div`
    /* margin: auto; */
    width: 250px;
    position: relative;
    height: 350px;
    box-shadow: 0px 0px 0.8px 0.5px gray;
    border-radius: 10px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    img{
        width: 100%;
        display: flex;
        max-height: 350px;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        /* display: block; */
        z-index: -1;
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

export const DivBlur = styled.div`
    z-index: -1;
    background-image: url("https://dbdzm869oupei.cloudfront.net/img/sticker/preview/59597.png");
    /* filter: blur(1px); */
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;
    border-radius: 10px;
`

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
`

export const Button = styled.button`
`
