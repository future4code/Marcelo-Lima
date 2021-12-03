import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    height: 468.8px;
    box-shadow: 0px 0px 8px 1px black;
    border-radius: 20px;
    transform: scale(1.5);
`

export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 90%;
    h3{
        padding-left: 45px;
        display: inline-block;
        font-weight: bold;
        font-family: Courier, monospace;
        background: linear-gradient(to bottom, #1abc9c 50%,#3498db 50%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    img{
        width: 25px;
        :hover{
            cursor: pointer;
            transition: .3s ease-in-out;
            transform: scale(0.87);
        }
    }
`

export const DivMatchProfile = styled.div`
    display: flex;
    width: 88%;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    margin: 5px;
    border-radius: 1px;
    :hover{
        background-color: #3498db;
        cursor: pointer;
    }
    img{
        width: 35px;
        height: 35px;
        border-radius: 100px;
        display: flex;
        margin-left: 5px;
    }
    p{
        width: 170px;
    }
`
export const DivButton = styled.div`
    position: absolute;
    top: 410px;
    button{
        background-color: #3498db;
        border-radius: 10px;
        border: none;
        height: 30px;
        color: white;
        :hover{
            background-color: #1abc9c;
            color: white;
            cursor: pointer;
        }
        :active{
            background-color: #3498db;
        }
    }
`

export const ImgGif = styled.img`
    width: 80px;
    margin: 40% 32%;

`

export const DivScroll = styled.div`
    overflow: auto;
    max-height: 320px;
    width: 250px;
    padding-left: 20px;
    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #3498db; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #1abc9c; 
    }
`