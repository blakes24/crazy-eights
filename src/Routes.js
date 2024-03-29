import { Route, Switch, BrowserRouter } from "react-router-dom";
import Game from "./Game";
import LandingPage from "./LangingPage";
import Navbar from "./Navbar";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
        <Route>
          <p>Page not found.</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
