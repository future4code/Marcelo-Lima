import React from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";

class App extends React.Component {
  state = {
    page: 1,
    nameButton: "lista",
  }

  togglePage = () => {
    if (this.state.page === 1) {
      this.setState({ page: 2 })
      this.setState({ nameButton: "registro" })
    } else if (this.state.page === 2) {
      this.setState({ page: 1 })
      this.setState({ nameButton: "lista" })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePage}>Ir para página de {this.state.nameButton}</button>
        {this.state.page === 1 ? <Form /> : <UsersList />}
      </div>
    );
  }
}
export default App;