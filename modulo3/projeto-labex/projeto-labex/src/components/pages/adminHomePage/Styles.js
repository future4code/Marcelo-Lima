import styled from "styled-components";

export const TripDiv = styled.div`
    display: flex;
    border: 1px solid black;
    margin: 20px;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    z-index: -1;
    button{
        z-index: 1;
    }
`