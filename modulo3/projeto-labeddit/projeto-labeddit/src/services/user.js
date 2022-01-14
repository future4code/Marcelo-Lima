import axios from "axios";
import { BASE_URL } from '../constants/urls'
import { goToFeed } from "../routers/Coordinator";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const login = (body, clear, history, setRightButtonText) => {

    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            goToFeed(history)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            toast.error(err.response.data, {
                position: toast.POSITION.TOP_CENTER
            })
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
            toast.error(err.response.data.message + 'A senha deve ter no mínimo 8 caracteres', {
                position: toast.POSITION.TOP_CENTER
            })
        })
}