import styled from "styled-components";
import { Button, TextField } from '@material-ui/core';

export const DivMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    h1{
        color: #eb4034;
        transform: scale(1.5);
    }
    p{
        @media screen and (max-device-width : 480px) {
        width: 60vw;
    }
    }
`

export const DivMensageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 40vw;
    margin: auto;
    @media screen and (max-device-width : 480px) {
        width: 60vw;
    }
`

export const StyledButton = styled(Button)`
    margin-top: 50px;
    width: 300px;
`