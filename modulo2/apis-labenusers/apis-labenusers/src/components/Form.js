import React from "react";
import styled from "styled-components";
import axios from "axios";

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

class Form extends React.Component {
    state = {
        name: "",
        email: "",
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
                this.setState({ name: "", email: "" })
                alert("Usuário cadastrado com sucesso!")
                this.getUsersList()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    onChangeInputNome = (e) => {
        this.setState({ name: e.target.value })
    }

    onChangeInputEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    render() {
        return (
            <div>
                <DivForm>
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
            </div>
        );
    }
}


export default Form;