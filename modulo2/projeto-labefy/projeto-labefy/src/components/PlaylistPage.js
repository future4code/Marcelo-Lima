// import React from "react";
// import axios from "axios";
// import styled from "styled-components";

// const DivList = styled.div`
//     display: flex;
//     justify-content: space-between;
//     width: 200px;
//     margin: 5px;
//     button{
        
//     }
// `

// export default class PlaylistPage extends React.Component {
//     state = {
//         playlist: []
//     }

//     componentDidMount = () => {
//         this.getAllPlaylists();
//     }

//     getAllPlaylists = () => {
//         const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
//         axios.get(url, {
//             headers: {
//                 Authorization: "marcelo-maia-carver"
//             }
//         })
//             .then((res) => {
//                 this.setState({ playlist: res.data.result.list })
//             })
//             .catch((err) => {
//                 console.log("Deu errado:", err.message)
//             })
//     }

//     deleteList = (id) => {
//         const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
//         axios.delete(url, {
//             headers: {
//                 Authorization: "marcelo-maia-carver"
//             }
//         })
//         .then((res) => {
//             this.getAllPlaylists()
//             console.log("ok", res.data)
//         })
//         .catch((err) => {
//             console.log("errooo", err.message)
//         })
//     }

//     render() {
//         console.log("PlayList", this.state.playlist)
//         const listCreate = this.state.playlist.map((list) => {
//             return (
//                 <DivList key={list.id}>
//                     {list.name}
//                     <button onClick={() => this.deleteList(list.id)}>X</button>
//                 </DivList>)
//         })

//         return (
//             <div>
//                 {listCreate}
//             </div>
//         )
//     }
// }