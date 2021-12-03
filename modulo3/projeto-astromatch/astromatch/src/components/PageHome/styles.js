import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 200px;
`

export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 90%;
    h3{
        padding-right: 30.7px;
        padding-left: 5px;
        display: inline-block;
        font-weight: bold;
        font-family: Courier, monospace;
        background: linear-gradient(to bottom, #1abc9c 50%,#3498db 50%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    img{
        width: 30px;
        :hover{
            cursor: pointer;
            transition: .3s ease-in-out;
            transform: scale(0.87);
        }
    }
`

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    box-shadow: 0px 0px 8px 1px black;
    border-radius: 20px;
    transform: scale(1.5);
`

export const CardDiv = styled.div`
    width: 250px;
    position: relative;
    height: 350px;
    box-shadow: 0px 0px 0.8px 0.5px gray;
    border-radius: 10px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
    :hover{
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), transparent);
    }
    img{
        width: 100%;
        display: flex;
        max-height: 350px;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        /* z-index: -1; */
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
    /* background-image: url("https://dbdzm869oupei.cloudfront.net/img/sticker/preview/59597.png"); */
    /* filter: blur(1px); */
    background-color: black;
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
    justify-content: space-between;
    width: 180px;
    height: 60px;
    img{
        width: 35px;
        :hover{
            cursor: pointer;
            transition: .3s ease-in-out;
            transform: scale(1.3);
        }
    }
`

export const Button = styled.button`
`

export const DivText = styled.div`
    height: 350px;
    width: 250px;
    border-radius: 10px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
`