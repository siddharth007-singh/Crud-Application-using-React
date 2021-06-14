import './App.css';
import React from 'react';
import HomePage from './Components/HomePage';
import StdView from './Components/StdView';
import {BrowserRouter as Router, Switch,Link, Route} from 'react-router-dom';


const App = () => {
  return(
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/View/:id" component={StdView}/>
        </Switch>
      </Router>
    </React.Fragment> 
  )
}

export default App;
