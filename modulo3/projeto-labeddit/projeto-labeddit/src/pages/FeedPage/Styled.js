import { Fab, TextField } from "@material-ui/core";
import styled from "styled-components";

import Button from '@material-ui/core/Button';

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
    cursor: pointer;
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

export const TextBodyContainer = styled.p`
    min-height: 100px;
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
    form{
        display: flex;
        flex-direction: column;
        flex-direction: column;
        width: 40vw;
        min-width: 200px;
        max-width: 400px;
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