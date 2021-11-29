import React from "react";
import styled from "styled-components";
import axios from "axios";

const DivContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const DivCardsRender = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`

const TituloPlaylist = styled.div`
    color: white;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Jazz LET, fantasy;
    font-variant: normal;
    font-size: 20px;
`

const DivContainerPlaylist = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 20px;
    button{
        :hover{
            background-color: gold;
        }
    }
`

const DivNamePlaylist = styled.div`
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(142,0,0,1) 53%, rgba(163,122,65,1) 100%);
    width: 80px;
    text-align: center;
    border-radius: 10px;
    :hover{
        background: rgb(131,58,180);
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    }
    :active{
        background: rgb(131,58,180);
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(142,0,0,1) 53%, rgba(163,122,65,1) 100%);
    }
`

const DivButton = styled.div`
    display: flex;
    align-items: center;
`

const DivCard = styled.div`
    width: 250px;
    height: 380px;
    box-shadow: 0px 15px 30px rgb(131,58,180);
    margin-bottom: 20px;
`

const DivPlaylists = styled.div`
    padding-bottom: 300px;
`

export default class DetailsPlaylist extends React.Component {
    state = {
        playlists: [],
        details: [],
        idPlaylist: "",
        inputName: "",
        inputArtist: "",
        inputUrl: "",
        control: 1
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
                if (this.state.control === 1) {
                    this.setState({
                        control: 2
                    })
                } else if (this.state.control === 2) {
                    this.setState({
                        control: 1
                    })
                }
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
        console.log("control:", this.state.control)
        console.log("hm", this.state.playlists)
        const renderPLaylist = this.state.playlists.map((item) => {
            return (
                <DivContainerPlaylist>
                    <DivNamePlaylist>
                        <TituloPlaylist onClick={() => this.getPlaylistTracks(item.id)}>{item.name}</TituloPlaylist>
                    </DivNamePlaylist>
                    
                    <DivButton>
                        <button onClick={() => this.deleteList(item.id)}>X</button>
                    </DivButton>
                    
                </DivContainerPlaylist>)
        })

        const renderListTracks = this.state.details.map((item) => {
            return (
                <DivCard key={item.id}>
                    <iframe src={item.url} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </DivCard>
            )
        })

        const addTrack =
            <div>
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
                <button onClick={this.addTrackToPlaylist}>Salvar Track</button></div>


        return (
            <DivContainer>
                <DivPlaylists>
                    {renderPLaylist}
                </DivPlaylists>
                <div>
                    {this.state.control === 2 ? addTrack : ""}
                    <DivCardsRender>
                        {this.state.control === 2 ? renderListTracks : ""}
                    </DivCardsRender>
                </div>
            </DivContainer>
        )
    }
}