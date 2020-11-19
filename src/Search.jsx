import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.submitSearch = props.submitSearch;
  }

  search = () => {
    this.submitSearch(document.getElementById("search-input").value);
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

export default Search;
