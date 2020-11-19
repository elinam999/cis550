import React from 'react';
import './App.css';
import Search from './Search.jsx';
import Loading from './Loading.jsx';
import Results from './Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "search",
      results: null
    }
  }

  submitSearch = (value) => {
    this.query = value;
    this.setState({
      page: "loading"
    });
  }

  saveResults = (results) => {
    this.setState({
      page: "results",
      results: results
    });
  }

  render() {
    switch (this.state.page) {
      case "search":
        return <Search submitSearch={this.submitSearch}/>;
      case "loading":
        return <Loading saveResults={this.saveResults} query={this.query}/>;
      case "results":
        return <Results results={this.state.results}/>
      default:
        return;
    }
  }
}

export default App;
