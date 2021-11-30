import axios from 'axios';
import styled from 'styled-components';
import {useState, useEffect} from 'react'


function App() {
  const [matches, setMatches] = useState({})
  const [listMatches, setListMatches] = useState ({})

  useEffect(() => {
    getMaches()
    getProfileToChoose()
  }, [])

  const getMaches = (() => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcelo/matches`, {
      headers: {
        Authorization: "marcelo-maia-carver"
      }
    })
    .then((res) => {
      setMatches(res.data)
      console.log("a", res.data.matches)
    })
    .catch((err) => {
      console.log(err.responde.data)
    })
  })

  const getProfileToChoose = ((userId) => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcelo/person`
    const body = {"id": `${userId}`, "choice": true}
    axios.get(url, body, {
      headers: {
        Authorization: "marcelo-maia-carver"
      }
    })
    .then((res) => {
      console.log("b", res.data)
    })
    .catch((err) => {
      console.log("c", err.response)
    })
  })

  return (
    <div>
      aaa
    </div>
  );
}

export default App;
