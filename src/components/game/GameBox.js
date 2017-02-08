import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../actions/gameActions';
import PlayerInfo from './PlayerInfo';
import GamePlay from './GamePlay';
import blocks from '../../img/blocks.svg';

class GameBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      //game: {players: [{name: 'YES'}, {name: 'MAN'}], letters: ['n']},
      guess: ''
    };


    this.updateGuess = this.updateGuess.bind(this);
    this.guessValid = this.guessValid.bind(this);
    this.timesUp = this.timesUp.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.game !== nextProps.game[0]) {
      // populates form when course is loaded
      //this.setState({game: Object.assign({}, nextProps.game[0])});
    }
  }

  updateGuess(event) {
    let guess = event.target.value;
    if(!this.guessValid(guess)) {
      return;
    }
    this.props.actions.makeGuess(this.props.game.id, this.props.game.currentPlayer.id, guess)
      .then(isWord => {
        console.log(isWord);
      });
    return this.setState({guess: guess});
  }

  guessValid(guess) {
    // make sure guess only contains letters from game
    let letters = Object.assign([], this.props.game.letters);

    for(let i = 0; i < guess.length; i++) {
      const letterIndex = letters.indexOf(guess.charAt(i));
      if(letterIndex == -1) {
        return false;
      }
      letters.splice(letterIndex, 1);
    }

    return true;

  }

  timesUp() {
    return this.setState({guess: "DONE!"});
  }

  render() {
    return (
      <div>
        <div className="row">
          <PlayerInfo player={this.props.game.currentPlayer} />
          <div className="col-md-4 thumbnail">
            <img src={blocks} className="img-responsive" />
          </div>
          <PlayerInfo player={this.props.game.otherPlayers[0]} />
        </div>
        <div className="row">
          <GamePlay
            letters={this.props.game.letters}
            guess={this.state.guess}
            onChange={this.updateGuess}
            guessCorrect={this.props.game.guessCorrect}
            onTimesUp={this.timesUp}
          />
        </div>
      </div>
    );
  }

}

GameBox.propTypes = {
  game: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
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