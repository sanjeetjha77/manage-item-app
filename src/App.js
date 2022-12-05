import React from "react";
import AllItems from "./pages/AllItems";
import Favourites from "./pages/Favourites";
import NewItem from "./pages/NewItem";
import { Route, Switch } from 'react-router-dom';
// import MainNavigation from "./component/Layout/MainNavigation";
import Layout from "./component/Layout/Layout";


function App() {
  return (
    <Layout>
    <Switch>
      <Route path={'/'} exact >
        <AllItems />
      </Route>
      <Route path={'/new-item'}>
        <NewItem />
      </Route>
      <Route path={'/favourites'}>
        <Favourites />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
