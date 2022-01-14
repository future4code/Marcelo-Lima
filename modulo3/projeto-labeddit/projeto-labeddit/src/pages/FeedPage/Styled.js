import styled from "styled-components";
import { Fab, TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from 'react-icons/ai';

export const DivCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 5px;
    width: 60vw;
    min-width: 200px;
    max-width: 600px;
    border-radius: 5px;
    min-height: 200px;
    background-color: white;
    z-index: -1;
    :hover{
        box-shadow: 0px 0px 2px 1px black;
    }
    p{
        margin: 2px 10px 0px 10px;
    }
    @media screen and (max-device-width : 480px) {
        width: 100vw;
    }

`

export const DivTitleName = styled.div`
    cursor: pointer;
    h3{
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
    min-height: 100px;
    overflow: auto;
    ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
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
    justify-content: space-between;
    margin: 3px 5px;
    background-color: #DAE0E6;
    border-radius: 5px;
    height: 35px;
    align-items: center;
`

export const DivLikeContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 5px;
    button{
        z-index: 2;
    }
`

export const AddPostButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`

export const DivFormCreatePost = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    min-width: 200px;
    max-width: 400px;
    margin: auto;
    margin-top: 20px;
    @media screen and (max-device-width : 480px) {
        width: 100vw;
    }
    form{
        display: flex;
        flex-direction: column;
        flex-direction: column;
        width: 40vw;
        min-width: 200px;
        max-width: 400px;
        @media screen and (max-device-width : 480px) {
        width: 100vw;
        }
        input{
            height: 40px;
        }
        button{
        height: 40px;
        }
    }
`

export const StyledButton = styled(Button)`
    margin-top: 15px;
    background-color: white;
`

export const StyledInput = styled(TextField)`
    background-color: white;
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