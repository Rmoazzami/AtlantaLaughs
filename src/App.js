import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Comics from './components/Comics';
import Request from './components/Request';
import Service from './components/Service';
import Footer from './components/Footer';


import { render } from "react-dom";
 import './css/App.css';

import Tabs from './Tabs';
require('./css/styles.css');


function App() {
  return (
      <div className = 'page-container'>
          <Router>
              <div className ="App">
                  <Nav />
                  <Switch>
                      <Route exact = {true} path = '/' component={About}/>
                      <Route path = '/Comics' component={Comics}/>
                      <Route path = '/Request' component={Request}/>
                      <Route path = '/Service' component={Service}/>

                  </Switch>

              </div>
          </Router>
          <Footer/>
      </div>

  );
}



export default App;
