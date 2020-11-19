import React from 'react';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.results = props.results;
  }

  render() {
    return (
      <div id="Results">
        {this.results}
      </div>
    );
  }
}

export default Results;
