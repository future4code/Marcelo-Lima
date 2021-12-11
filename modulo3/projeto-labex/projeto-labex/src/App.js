import Router from './route/Router'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* background-color: #071A60; */
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router />
    </div>
  );
}

export default App;