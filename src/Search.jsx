import React from 'react';
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.submitSearch = props.submitSearch;
    this.history = props.history;
  }

  search = () => {
    this.submitSearch(document.getElementById("search-input").value);
    this.history.push("/results");
  }

  render() {
    return (
      <div id="Search">
        <div className="grid-center flex">
          <input id="search-input" type="text" className="underline-input"/>
          <button className="search-button" onClick={this.search}>Search</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
