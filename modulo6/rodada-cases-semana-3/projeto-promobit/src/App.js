import Router from './router/Router';
import { GlobalState } from "./globalContext/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  )
}

export default App;
