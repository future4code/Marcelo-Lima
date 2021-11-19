import React from "react";
import axios from "axios";
import styled from "styled-components";
import DetailsPlaylist from "./DetailsPlaylist";

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

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
        // playlist: [],
        // details: [],
        // inputName: "",
        // inputArtist: "",
        // inputUrl: "",
        // nameMusic: "",
        // artistMusic: "",
        // urlMusic: "",
        // idPlaylist: "",
    }

    // componentDidMount = () => {
    //     this.getAllPlaylists();
    // }

    // getAllPlaylists = () => {
    //     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    //     axios.get(url, {
    //         headers: {
    //             Authorization: "marcelo-maia-carver"
    //         }
    //     })
    //         .then((res) => {
    //             this.setState({ playlist: res.data.result.list })
    //         })
    //         .catch((err) => {
    //             console.log("Deu errado:", err.message)
    //         })
    // }

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

    // getPlaylistTracks = (id) => {
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    //     axios.get(url, {
    //         headers: {
    //             Authorization: "marcelo-maia-carver"
    //         }
    //     })
    //         .then((res) => {
    //             this.setState({
    //                 details: res.data.result.tracks,
    //                 idPlaylist: id
    //             })
    //             console.log(this.state.idPlaylist)
    //         })
    //         .catch((err) => {
    //             console.log("deu errado", err)
    //         })
    // }

    // addTrackToPlaylist = () => {
    //     const body = {
    //         name: this.state.inputName,
    //         artist: this.state.inputArtist,
    //         url: this.state.inputUrl,
    //     }
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`
    //     axios.post(url, body, {
    //         headers: {
    //             Authorization: "marcelo-maia-carver"
    //         }
    //     })
    //         .then((res) => {
    //             this.setState({
    //                 inputName: "",
    //                 inputArtist: "",
    //                 inputUrl: "",
    //             })
    //             console.log("certo", res)
    //         })
    //         .catch((err) => {
    //             console.log("erro", err.message)
    //         })
    // }

    onChangeInputValue = (e) => {
        this.setState({ inputValue: e.target.value })
    }
    // onChangeInputName = (e) => {
    //     this.setState({ inputName: e.target.value })
    // }
    // onChangeInputArtist = (e) => {
    //     this.setState({ inputArtist: e.target.value })
    // }
    // onChangeInputUrl = (e) => {
    //     this.setState({ inputUrl: e.target.value })
    // }



    render() {
        // console.log("inputValue:", this.state.inputValue)
        // console.log("details:", this.state.details)
        // const listCreate = this.state.playlist.map((list) => {
        //     return (
        //         <DivList key={list.id}>
        //             <a onClick={() => this.getPlaylistTracks(list.id)}>{list.name}</a>
        //             <button onClick={() => this.deleteList(list.id)}>X</button>
        //         </DivList>)
        // })

        // const listTracks = this.state.details.map((item) => {
        //     return (
        //         <div key={item.id}>
        //             <iframe src={item.url} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        //         </div>
        //     )
        // })
        // const saveTrack = <DetailsPlaylist
        //     play={this.state.playlist1}
        //     aluno={this.state.inputName}
        //     aluno1={this.onChangeInputName}
        //     aluno2={this.state.inputArtist}
        //     aluno21={this.onChangeInputArtist}
        //     aluno3={this.state.inputUrl}
        //     aluno31={this.onChangeInputUrl}
        //     aluno4={this.addTrackToPlaylist}
        // />
            // <div>
            //     <input
            //         placeholder={"Nome da música"}
            //         value={this.state.inputName}
            //         onChange={this.onChangeInputName}
            //     />
            //     <input
            //         placeholder={"Artista"}
            //         value={this.state.inputArtist}
            //         onChange={this.onChangeInputArtist}
            //     />
            //     <input
            //         placeholder={"Url link"}
            //         value={this.state.inputUrl}
            //         onChange={this.onChangeInputUrl}
            //     />
            //     <button onClick={this.addTrackToPlaylist}>Salvar Track</button>
            // </div>


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