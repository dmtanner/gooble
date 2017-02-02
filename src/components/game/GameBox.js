import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import PlayerInfo from './PlayerInfo';
import GamePlay from './GamePlay';

class GameBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.updateGuess = this.updateGuess.bind(this);
  }

  updateGuess(event) {
    const field = event.target.name;
    //console.log(field);
    //let currentGuess = this.state.currentGuess;
    let currentGuess = event.target.value;
    return this.setState({currentGuess});
  }

  render() {
    return (
      <div>
        <div className="row">
          <PlayerInfo player={{name: "Bob"}} />
          <div className="col-md-4"></div>
          <PlayerInfo player={{name: "Joe"}} />
        </div>
        <div>
          <GamePlay
            letters={['l','q','n','e','t']}
            currentGuess={'ten'}
            onChange={this.updateGuess}
          />
        </div>
      </div>
    );
  }

}

GameBox.propTypes = {
  players: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBox);