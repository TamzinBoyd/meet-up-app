import "./App.css";
import { Route } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUp";
import Favourites from "./pages/Favourites";
import { Switch } from "react-router-dom";
import MainNav from "./components/layout/MainNav";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetUpsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetUpsPage />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
