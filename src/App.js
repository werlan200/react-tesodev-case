import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import ResultsPage from "./pages/ResultsPage";
import Error from "./pages/Error";
import { useGlobalContext } from "./context";
function App() {
  const { redirect } = useGlobalContext();
  return (
    <Router>
      <main className="main">
        <Switch>
          <Route exact path="/">
            {redirect ? <Redirect to="/results" /> : <Home />}
          </Route>
          <Route exact path="/results">
            <ResultsPage />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
