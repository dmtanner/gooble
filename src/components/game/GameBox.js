import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import PlayerInfo from './PlayerInfo';
import GamePlay from './GamePlay';

class GameBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      //game: {players: [{name: 'YES'}, {name: 'MAN'}], letters: ['n']},
      guess: ''
    };


    this.updateGuess = this.updateGuess.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.game !== nextProps.game[0]) {
      // populates form when course is loaded
      //this.setState({game: Object.assign({}, nextProps.game[0])});
    }
  }

  updateGuess(event) {
    let guess = event.target.value;
    console.log(guess);
    return this.setState({guess: guess});
  }

  render() {
    return (
      <div>
        <div className="row">
          <PlayerInfo player={this.props.game.players[0]} />
          <div className="col-md-4"></div>
          <PlayerInfo player={this.props.game.players[1]} />
        </div>
        <div>
          <GamePlay
            letters={this.props.game.letters}
            guess={this.state.guess}
            onChange={this.updateGuess}
          />
        </div>
      </div>
    );
  }

}

GameBox.propTypes = {
  game: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBox);