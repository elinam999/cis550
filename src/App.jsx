import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Search from './Search.jsx';
import Results from './Results.jsx';

class App extends React.Component {
  submitSearch = (value) => {
    this.query = value;
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/results">
            <Results query={this.query}/>
          </Route>
          <Route path="/">
            <Search submitSearch={this.submitSearch}/>
          </Route>
        </Switch>
      </Router>
    );
}
}

export default App;
