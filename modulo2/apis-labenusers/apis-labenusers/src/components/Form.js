// import React from "react";
// import styled from "styled-components";
// import axios from "axios";
// import UsersList from "./UsersList";

// const DivForm = styled.div`
//     border: 1px solid black;
//     display: flex;
//     flex-direction: column;
//     width: 300px;
//     margin: auto;
//     height: 200px;
//     justify-content: center;
//     align-items: center;
//     button{
//         width: 60px;
//         padding: 10px;
//         margin: 20px;
//     }
// `
    

// class Form extends React.Component {
//     state = {
//         name: "",
//         email: "",
//         users: [],
//     }





//     componentDidMount() {
//         this.getUsersList();
//     }

//     getUsersList = () => {
//         axios.get(
//             'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
//             headers: {
//                 "Authorization": 'marcelo-maia-carver'
//             }
//         })
//             .then((res) => {
//                 this.setState({ users: res.data})
//                 // alert("ok")
//             })
//             .catch((err) => {
//                 alert("erro")
//             })
//     }

//     createUser = () => {
//         const body = {
//             name: this.state.name,
//             email: this.state.email,
//         }
//         axios
//             .post(
//                 "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
//                 body,
//                 {
//                     headers: {
//                         Authorization: "marcelo-maia-carver"
//                     }
//                 }
//             )
//             .then((res) => {
//                 this.setState({name: ""})
//                 this.setState({email: ""})
//                 this.getUsersList()
//             })
//             .catch((err) => {
//                 console.log(err.response)
//             })
//     }





//     onChangeInputNome = (e) => {
//         this.setState({ name: e.target.value })
//         // console.log(this.state.name)
//     }

//     onChangeInputEmail = (e) => {
//         this.setState({ email: e.target.value })
//     }

//     render() {
//         console.log("usuarios", this.state.users)
//         const listUsers = this.state.users.map((item) => {
//             return  <ul><il>{item.name}</il></ul>
//         })
        
//         return (
//             <div>
//             <DivForm>
//                 <span>
//                     <label><b>Nome:</b></label>
//                     <input
//                         value={this.state.name}
//                         onChange={this.onChangeInputNome}
//                     />
//                 </span>
//                 <span>
//                     <label><b>E-mail:</b></label>
//                     <input
//                         value={this.state.email}
//                         onChange={this.onChangeInputEmail}
//                     />
//                 </span>
//                 <button onClick={this.createUser} >Salvar</button>
//             </DivForm>
//             <h2>Usuários cadastrados:</h2>
//             {listUsers}
//             </div>   
//         );
//     }
// }


// export default Form;
