import { Fab } from "@material-ui/core";
import styled from "styled-components";

export const DivCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: aqua;
    width: 40vw;
    min-width: 200px;
    max-width: 400px;
`

export const AddPostButton = styled(Fab)`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`