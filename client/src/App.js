import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { Auth } from "./Components/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <div style={{ width: "100%" }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
