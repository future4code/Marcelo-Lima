import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../../../constants/Constants'
import useForm from '../../../hooks/Hooks'

export default function LoginPage() {
    const { form, onChange, cleanFields } = useForm({
        email: '',
        password: ''
    })

    const history = useHistory()
    const send = (e) => {
        e.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post(`${url}/login`, body)
            .then((res) => {
                console.log("deu certo", res.data)
                localStorage.setItem('token', res.data.token)
                history.push("/adminHomePage")
                cleanFields()
            })
            .catch((err) => {
                console.log("deu errado", err.response)
                alert("E-mail ou senha inválidos")
            })
    }

    const goBackToHome = () => {
        history.push("/")
    }

    return (
        <div>
            <p>LoginPage</p>
            <form onSubmit={send}>
                <input
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    placeholder="E-mail"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title={"Insira um endereço de e-mail válido com @endereço.com"}
                />
                <input
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    placeholder="Senha"
                    type="password"
                    required
                    pattern={"^.{4,}"}
                    title={"A senha deve ter no mínimo 4 dígitos"}
                />
                <button>Entrar</button>
            </form>
            <button onClick={goBackToHome}>Voltar</button>
        </div>
    )
}
