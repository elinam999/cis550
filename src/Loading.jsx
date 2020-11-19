import React from 'react';
import ResultBlock from './ResultBlock';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    props.saveResults(this.queryDatabase(props.query));
  }

  queryDatabase = (query) => {
    // query database
    console.log(`querying ${query}`);
    // some mock data here
    return [
      <ResultBlock key="a" song="Some Song" artist="Some Guy"/>,
      <ResultBlock key="b" song="QWERTY" artist="COLMAK"/>,
      <ResultBlock key="c" song="DEADBEEF" artist="FOOBAR"/>
    ];
  }

  render() {
    return (
      <div id="Loading">
        Loading ...
      </div>
    );
  }
}

export default Loading;
