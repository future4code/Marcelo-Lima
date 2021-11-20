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
    height: 100px;
    margin: 200px auto;
    background-image: url("https://www.hardware.com.br/filters:format:(jpeg)/@/static/wp/2021/03/24/descobrir-musica.jpg");
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 300px;
`

const DivList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: 5px;
    button{
        
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
                this.getAllPlaylists()
                this.setState({ inputValue: "" })
            })
            .catch((err) => {
                console.log("erro:", err.message)
            })
    }

    deleteList = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "marcelo-maia-carver"
            }
        })
            .then((res) => {
                this.getAllPlaylists()
                console.log("ok", res.data)
            })
            .catch((err) => {
                console.log("errooo", err.message)
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