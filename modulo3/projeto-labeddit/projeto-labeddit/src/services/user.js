import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BASE_URL } from '../constants/urls'
import useForm from '../hooks/useForm'
import { goToFeed } from "../routers/Coordinator";

export const login = (body, clear, history, setRightButtonText) => {

    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeed(history)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeed(history)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            alert(err.response.data)
        })
}