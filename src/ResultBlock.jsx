import React from 'react';

class ResultBlock extends React.Component {
  constructor(props) {
    super(props);
    this.song = props.song;
    this.artist = props.artist;
  }

  render() {
    return (
      <div className="result">
        <p>{this.song}</p>
        <p>{this.artist}</p>
      </div>
    );
  }
}

export default ResultBlock;
