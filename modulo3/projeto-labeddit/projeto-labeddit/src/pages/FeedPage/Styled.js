import { Fab } from "@material-ui/core";
import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const DivCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 5px;
    width: 40vw;
    min-width: 200px;
    max-width: 400px;
    border-radius: 5px;
    border: 1px solid #eb4034;
    min-height: 200px;
    background-color: white;
    z-index: -1;
    :hover{
        /* box-shadow: 0px 0px 2px 1px black; */
        border: 1px solid black;
    }
    
    h4{
        background-color: #ff1200;
        margin: 10px;
        color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
    }
    p{
        margin: 10px;
    }
    div{
        display: flex;
        justify-content: space-between;
        margin: 0px 5px;
        background-color: #c4c4c4;
        border-radius: 5px;
    }
`

export const DivLikeContainer = styled.div`
    display: flex;
    align-items: center;
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