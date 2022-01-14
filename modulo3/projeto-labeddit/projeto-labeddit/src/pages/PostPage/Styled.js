import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from 'react-icons/ai';

export const DivCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 10px;
    width: 60vw;
    min-width: 200px;
    max-width: 600px;
    border-radius: 5px;
    border: 1px solid white;
    min-height: 400px;
    background-color: white;
    z-index: -1;
    :hover{
    }
    p{
        margin: 2px 10px 0px 10px;
    }
    @media screen and (max-device-width : 480px) {
        width: 100vw;
    }

`

export const DivTitleName = styled.div`
    h3{
        /* background-color: #ff1200; */
        /* background-color: #260a0a; */
        /* border: 1px solid black; */
        margin: 0px 10px;
        color: black;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        color: #c4c4c4;
    }
`

export const TextBodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 200px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100px;
        margin-right: 5px;
        width: 40px;
    }
    img{
        width: 25px;
        :hover{
            width: 30px;
            transition: .1s ease-in-out;
            cursor: pointer;
        }
    }
`

export const DivBottomCardPost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px 5px;
    padding-bottom: 5px;
    background-color: #DAE0E6;
    border-radius: 5px;
    max-height: 350px;
    overflow: auto;
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
    background: #eb4034; 
    border-radius: 10px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #3632b3; 
    }
    form{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        @media screen and (max-device-width : 480px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

    }
`

export const StyledButton = styled(Button)`
    background-color: white;
`

export const StyledInput = styled(TextField)`
    background-color: white;
    margin: 5px 5px;
    height: 45px;
    border-radius: 5px;
    width: 70%;
`

export const DivComentContainer = styled.div`
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
`

export const DivButtonLikeComment = styled.div`
    display: flex;
    flex-direction: row;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100px;
        margin-right: 5px;
        width: 40px;
    }
    img{
        width: 25px;
        :hover{
            width: 30px;
            transition: .1s ease-in-out;
            cursor: pointer;
        }
    }
`

export const StyledButtonLikeUpBlack = styled(AiFillLike)`
    cursor: pointer;
`

export const StyledButtonLikeUpWhite = styled(AiOutlineLike)`
    cursor: pointer;
`

export const StyledButtonLikeDownBlack = styled(AiFillDislike)`
    cursor: pointer;
`

export const StyledButtonLikeDownWhite = styled(AiOutlineDislike)`
    cursor: pointer;
`

export const StyledLoading = styled.div`
    text-align: center;
    margin: 150px 0px;
`