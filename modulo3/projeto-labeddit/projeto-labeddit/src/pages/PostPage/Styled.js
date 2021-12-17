import styled from "styled-components";

import { Button, TextField } from "@material-ui/core";

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

export const TextBodyContainer = styled.p`
    min-height: 300px;
`

export const DivBottomCardPost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px 5px;
    padding-bottom: 5px;
    background-color: #DAE0E6;
    border-radius: 5px;
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
`