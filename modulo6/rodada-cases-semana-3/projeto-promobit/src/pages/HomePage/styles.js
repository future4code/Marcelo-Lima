import styled from "styled-components";
export const MainDiv = styled.div`
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    min-height: 90vh;
`
export const DivGenre = styled.div`
    height: 449px;
    background-color: #2D0C5E;
    h1{
        color: #ffff;
        margin: auto;
        text-align: center;
        font-size: 48px;
        max-width: 900px;
        margin-top: 85px;
    }
    p{
        color: #ffff;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-top: 50px;
    }
`
export const DivButtonGenres = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
    align-items: center;
    justify-content: center;
    margin: auto;
`
export const ButtonAdd = styled.button`
    height: 40px;
    background-color: #ffff;
    border: none;
    border-radius: 4px;
    margin: 5px;
    font-weight: bolder;
    font-size: 16px;
    padding: 0px 15px;
    :hover{
        cursor: pointer;
    }
    /* :active{
        background-color: #5C16C5;
        color: #ffff;
    } */
`
export const ButtonRemove = styled.button`
    height: 40px;
    background-color: #5C16C5;
    border: none;
    border-radius: 4px;
    margin: 5px;
    font-weight: bolder;
    font-size: 16px;
    padding: 0px 15px;
    color: #ffff;
    :hover{
        cursor: pointer;
    }
`
export const DivMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1229px;
    margin: auto;
`
export const DivPagination = styled.div`
    display: flex;
    justify-content: center;
`