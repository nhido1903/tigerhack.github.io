import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Recruiters from './component/Recruiters';
import Report from './component/Report';
import Contribute from './component/Contribute';
import FB from './component/feedback';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <Home/>
        <Recruiters/>
        <FB/>
        <Report/>
        <Contribute/> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recruiter">
            <Recruiters />
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
          <Route exact path="/contribute">
            <Contribute />
          </Route>
        </Switch>
        <FB />
      </div>
    </Router>
  );
}

export default App;