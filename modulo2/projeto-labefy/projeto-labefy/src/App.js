import React from "react";
import MainPage from "./components/MainPage";
import PlaylistPage from "./components/PlaylistPage";
import axios from "axios";
import DetailsPlaylist from "./components/DetailsPlaylist";

class App extends React.Component {
  state={
    control: 1,
  }

  togglePage = () => {
    if (this.state.control === 1){
      this.setState({
        control: 2
      })
    } else if (this.state.control === 2) {
      this.setState({
        control: 1
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePage}>Ir para as playlists</button>
        {this.state.control === 1 ? <MainPage /> : <DetailsPlaylist/>}
      </div>
    );
  }
}


export default App;
