import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivList = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul{
        width: 300px;
    }
`

const DivContainerList = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
`

class UsersList extends React.Component {
    state = {
        usersList: []
    }

    componentDidMount() {
        this.getUsersList();
    }

    getUsersList = () => {
        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "marcelo-maia-carver"
            }
        })
            .then((res) => {
                this.setState({ usersList: res.data })
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "marcelo-maia-carver"
            }
        })
        .then((res) => {
            this.getUsersList()
            console.log("sucesso deletar", res)
        })
        .catch((err) => {
            console.log("erro deletar:", err.response.data)
        })
    }
    render() {
        const userList = this.state.usersList.map((user) => {
            return (
                <DivContainerList key={user.id}>
                    {user.name}
                    <button onClick={() => this.deleteUser(user.id)}>X</button>
                </DivContainerList>)
        })
        return (
            <DivList>
                <h2>Usuários cadastrados:</h2>
                <ul>{userList}</ul>
            </DivList>
        );
    }
}
export default UsersList;