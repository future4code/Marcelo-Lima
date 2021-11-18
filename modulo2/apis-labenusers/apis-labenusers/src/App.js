import React from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import axios from "axios";
import styled from "styled-components";

const DivForm = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    height: 200px;
    justify-content: center;
    align-items: center;
    button{
        width: 60px;
        padding: 10px;
        margin: 20px;
    }
`

const DivList = styled.div`
    text-align: center;
`


class App extends React.Component {
  state = {
    page: 1,
    nameButton: "lista",
    name: "",
    email: "",
    users: [],
  }





  componentDidMount() {
    this.getUsersList();
  }

  getUsersList = () => {
    axios.get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        "Authorization": 'marcelo-maia-carver'
      }
    })
      .then((res) => {
        this.setState({ users: res.data })
        // alert("ok")
      })
      .catch((err) => {
        alert("erro")
      })
  }

  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "marcelo-maia-carver"
          }
        }
      )
      .then((res) => {
        this.setState({ name: "" })
        this.setState({ email: "" })
        this.getUsersList()
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  onChangeInputNome = (e) => {
    this.setState({ name: e.target.value })
    // console.log(this.state.name)
  }

  onChangeInputEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  togglePage = () => {
    if (this.state.page === 1) {
      this.setState({ page: 2 })
      this.setState({ nameButton: "registro" })
    } else if (this.state.page === 2) {
      this.setState({ page: 1 })
      this.setState({ nameButton: "lista" })
    }
  }

  deleteUsers = (e) => {
    const id = e.target.value
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "marcelo-maia-carver"
          },
          data: {
            source: id
          }
        }
      ).then((answ) => {
        alert("Usuário excluído!")
        this.getUsersList()
      })
      .catch((err) => {
        alert("Erro, tente novamente!")
        console.log("erro:", err.response.data)
      })

  }

  render() {
    
    const listUsers = this.state.users.map((item) => {
      return <ul><il>{item.name}</il><button value={this.state.users.id} onCLick={this.deleteUsers}>X</button></ul>
    })

    const pageRegister = <DivForm>
      <span>
        <label><b>Nome:</b></label>
        <input
          value={this.state.name}
          onChange={this.onChangeInputNome}
        />
      </span>
      <span>
        <label><b>E-mail:</b></label>
        <input
          value={this.state.email}
          onChange={this.onChangeInputEmail}
        />
      </span>
      <button onClick={this.createUser} >Salvar</button>
    </DivForm>

    const pageList = <DivList>
      <h2>Usuários cadastrados:</h2>
      {listUsers}
    </DivList>

    return (
      <div>
        <button onClick={this.togglePage}>Ir para página de {this.state.nameButton}</button>
        {this.state.page === 1 ? pageRegister : pageList}
      </div>
    );
  }
}
export default App;
