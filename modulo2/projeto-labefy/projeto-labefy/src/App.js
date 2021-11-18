import React from "react";
import MainPage from "./components/MainPage";
import PlaylistPage from "./components/PlaylistPage";
import axios from "axios";

class App extends React.Component {

  render() {
    return (
      <div>
        <MainPage />
        {/* <PlaylistPage /> */}
      </div>
    );
  }
}


export default App;
