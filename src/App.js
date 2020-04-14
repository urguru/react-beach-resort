import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Rooms } from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar'
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/" component={Home} />
        <Route  component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
