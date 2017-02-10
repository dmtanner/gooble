import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Gooble Homepage</h1>
        <p>Built with React and Redux</p>
        <Link to="game" className="btn btn-primary btn-lg">Play!</Link>
      </div>
    );
  }
}

export default HomePage;