import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import FrontPage from './pages/FrontPage'
import WhoIAm from './pages/WhoIAm'
import Projects from './pages/Projects'
import Formation from './pages/Formation'
import Curriculum from './pages/Curriculum'

function App() {
  return (
<BrowserRouter>
        <Switch>
          <Route exact path="/" component={ FrontPage } />
          <Route exact path="/WhoIAm" component={ WhoIAm } />
          <Route exact path="/Projects" component={ Projects } />
          <Route exact path="/Formation" component={ Formation } />
          <Route exact path="/Curriculum" component={ Curriculum } />

          </Switch>
    </BrowserRouter>
  );
}

export default App;
