import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Routes from "./components/routing/Routes";
//styles
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
