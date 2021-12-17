import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    const getPost = () => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
        })
    }

    useEffect(() => {
        getPost()
    }, [url])
    return [data, getPost]
}

export default useRequestData