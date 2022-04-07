import axios from "axios";
import { useEffect } from "react";

function App() {

  const testeApi = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=82b0648409145b0cd0fe83234612c192&language=pt-br&page=1`)
    .then((res)=>{
      console.log("deu certo", res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    testeApi()
  },[])

  
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
