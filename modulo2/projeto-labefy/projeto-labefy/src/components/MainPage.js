import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    margin: 200px auto;
    background-image: url("https://ak.picdn.net/shutterstock/videos/15251329/thumb/1.jpg");
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 300px;
    align-items: center;
    input{
        height: 50px;
        width: 50%;
    }
    button{
        margin: 0 auto;
        background: rgb(131,58,180);
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(142,0,0,1) 53%, rgba(163,122,65,1) 100%);
        color: white;
        border: none;
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border: none;
        overflow: hidden;
        cursor: pointer;
        border-radius: 5px;

    &::after {
        content: "";
        z-index: -1;
        background-color: hsla(0, 0%, 100%, 0.2);
        position: absolute;
        top: -50%;
        bottom: -50%;
        width: 1.25em;
        transform: translate3d(-525%, 0, 0) rotate(35deg);
    }

    &:hover::after {
        transition: transform 0.45s ease-in-out;
        transform: translate3d(200%, 0, 0) rotate(35deg);
    }
        }
`


export default class MainPage extends React.Component {
    state = {
        inputValue: "",
    }

    createPlaylist = () => {
        const body = {
            name: this.state.inputValue
        }
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.post(url, body, {
            headers: {
                Authorization: "marcelo-maia-carver"
            }
        })
            .then((res) => {
                console.log(res.data)
                alert("Playlist criada com sucesso!")
                this.setState({ inputValue: "" })
                this.getAllPlaylists()
            })
            .catch((err) => {
                console.log("erro:", err.message)
            })
    }

    onChangeInputValue = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    render() {

        return (
            <MainDiv>
                <DivForm>
                    <input
                        value={this.state.inputValue}
                        onChange={this.onChangeInputValue}
                        placeholder={"Digite o nome da playlist"}
                    />
                    <button onClick={this.createPlaylist}>Criar playlist</button>
                </DivForm>
            </MainDiv>
        )
    }
}