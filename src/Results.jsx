import React from 'react';
import ResultBlock from './ResultBlock';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.query = props.query;
    this.state = {
      loading: true,
      results: null
    }
  }

  componentDidMount() {
    this.queryDatabase(this.query)
    .then((results) => {
      console.log(results);
      this.setState({
        loading: false,
        results: results
      });
    });
  }

  queryDatabase = (query) => {
    // query database
    console.log(`querying ${query}`);
    // some mock data here
    return Promise.resolve([
      <ResultBlock key="a" song="Some Song" artist="Some Guy"/>,
      <ResultBlock key="b" song="QWERTY" artist="COLMAK"/>,
      <ResultBlock key="c" song="DEADBEEF" artist="FOOBAR"/>
    ]);
  }

  render() {
    return (
      <div id="Results">
        {this.state.loading ? "Loading ..." : this.state.results}
      </div>
    );
  }
}

export default Results;
