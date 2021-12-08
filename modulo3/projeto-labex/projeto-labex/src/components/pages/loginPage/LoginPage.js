import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const onChangeInputEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeInputSenha = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-maia-carver/login"
        const body = {
            email: email,
            password: password
        }
        axios.post(url, body)
        .then((res) => {
            console.log("deu certo", res.data)
            history.push("/adminHome")
            localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
            console.log("deu errado", err.response)
            alert("E-mail ou senha inválidos")
        })
    }

    return (
        <div>
            <p>LoginPage</p>
            <input
                onChange={onChangeInputEmail}
                placeholder="E-mail"
            />
            <input
                onChange={onChangeInputSenha}
                placeholder="Senha"
                type="password"
            />
            <button onClick={login}>Entrar</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}
