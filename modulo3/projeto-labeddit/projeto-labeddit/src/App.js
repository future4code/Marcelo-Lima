import theme from "./constants/theme";
import Router from "./routers/Router";
import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from "@material-ui/core";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #DAE0E6;
    font-family: verdana, arial, helvetica, sans-serif
  }
`

function App() {
  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtonText] = useState(token ? 'Logout' : 'Login')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
