import React from "react";
import styled from "styled-components";
import axios from "axios";



export default class DetailsPlaylist extends React.Component {
    state = {
        playlists: [],
        details: [],
        idPlaylist: "",
        inputName: "",
        inputArtist: "",
        inputUrl: "",
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
                this.setState({ playlists: res.data.result.list })
            })
            .catch((err) => {
                console.log("Deu errado:", err.message)
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
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios.get(url, {
            headers: {
                Authorization: "marcelo-maia-carver"
            }
        })
            .then((res) => {
                this.setState({
                    details: res.data.result.tracks,
                    idPlaylist: id
                })
                console.log(this.state.idPlaylist)
            })
            .catch((err) => {
                console.log("deu errado", err)
            })
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.inputName,
            artist: this.state.inputArtist,
            url: this.state.inputUrl,
        }
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`
        axios.post(url, body, {
            headers: {
                Authorization: "marcelo-maia-carver"
            }
        })
            .then((res) => {
                this.setState({
                    inputName: "",
                    inputArtist: "",
                    inputUrl: "",
                })
                console.log("certo", res)
            })
            .catch((err) => {
                console.log("erro", err.message)
            })
    }


    onChangeInputName = (e) => {
        this.setState({ inputName: e.target.value })
    }
    onChangeInputArtist = (e) => {
        this.setState({ inputArtist: e.target.value })
    }
    onChangeInputUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
    }

    render() {
        console.log("hm", this.state.playlists)
        const renderPLaylist = this.state.playlists.map((item) => {
            return (
                <div>
                    <p onClick={() => this.getPlaylistTracks(item.id)}>{item.name}</p>
                    <button onClick={() => this.deleteList(item.id)}>X</button>
                </div>)
        })

        const renderListTracks = this.state.details.map((item) => {
            return (
                <div key={item.id}>
                    <iframe src={item.url} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            )
        })

        return (
            <div>
                <div>
                    {renderPLaylist}
                    {renderListTracks}
                    <input
                        placeholder={"Nome da música"}
                        value={this.state.inputName}
                        onChange={this.onChangeInputName}
                    />
                    <input
                        placeholder={"Artista"}
                        value={this.state.inputArtist}
                        onChange={this.onChangeInputArtist}
                    />
                    <input
                        placeholder={"Url link"}
                        value={this.state.inputUrl}
                        onChange={this.onChangeInputUrl}
                    />
                    <button onClick={this.addTrackToPlaylist}>Salvar Track</button>
                </div>
            </div>
        )
    }
}