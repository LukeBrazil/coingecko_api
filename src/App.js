import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CoinTable from "./components/CoinTable/CoinTable";
import CoinInfo from './components/CoinInfo/CoinInfo'


import "./App.css";

function App() {

  return (
    <main>
      <Router>
        <Switch>
          <Route exact path='/' component={CoinTable} />
          <Route path='/coin/:id' component={CoinInfo} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
