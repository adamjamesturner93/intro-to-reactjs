import React from "react";

import "./App.css";
import About from "./pages/about/About";
import Header from "./components/layout/header/Header";
import { Switch, Route } from "react-router-dom";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
