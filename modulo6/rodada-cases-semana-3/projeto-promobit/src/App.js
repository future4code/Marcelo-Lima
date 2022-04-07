import Router from './router/Router';
import { GlobalState } from "./globalContext/GlobalState";
import { Header } from './components/Header/Header';

function App() {
  return (
    <GlobalState>
      <Header />
      <Router />
    </GlobalState>
  )
}

export default App;
