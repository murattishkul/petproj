import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Header from './Header';
import MainView from "./MainView";
import SideBar from "./SideBar";
import About from "./About";
import Contacts from "./Contacts";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <SideBar/>
        <Route exact path="/" component={() => (<Redirect to='/main' />)} />
        <Route exact path="/main" component={MainView} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
      </div>
    </Router>
  );
}

export default App;
