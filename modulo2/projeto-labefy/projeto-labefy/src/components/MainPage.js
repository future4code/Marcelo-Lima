import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivForm = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    height: 100px;
    margin: auto;
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
        playlist: [],
        details: []
    }

    componentDidMount = () => {
        this.getAllPlaylists();
    }

    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "marcelo-maia-carver"
            }
        })
            .then((res) => {
                this.setState({ playlist: res.data.result.list })
            })
            .catch((err) => {
                console.log("Deu errado:", err.message)
            })
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

    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`
        axios.get(url, {
            headers: {
                Authorization: "marcelo-maia-carver"
            }
        })
        .then((res) => {
            this.setState({details: res.data.result.tracks})
        })
        .catch((err) => {
            console.log("deu errado", err.message)
        })
    }

    onChangeInputValue = (e) => {
        this.setState({ inputValue: e.target.value })
    }



    render() {

        console.log(this.state.inputValue)
        console.log(this.state.details)
        const listCreate = this.state.playlist.map((list) => {
            return (
                <DivList key={list.id}>
                    <a onClick={() => this.getPlaylistTracks(list.name)}>{list.name}</a>
                    <button onClick={() => this.deleteList(list.id)}>X</button>
                </DivList>)
        })

        return (
            <div>
                <DivForm>
                    <label></label>
                    <input
                        value={this.state.inputValue}
                        onChange={this.onChangeInputValue}
                    />
                    <button onClick={this.createPlaylist}>Criar playlist</button>
                </DivForm>
                {listCreate}
            </div>
        )
    }
}