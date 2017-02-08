import React, {PropTypes} from 'react';
import ReactCountdownClock from 'react-countdown-clock';

const GamePlay = ({letters, guess, guessCorrect, onChange, onTimesUp}) => {
  return (
    <div className="well">
      <div className="center">
        <ReactCountdownClock
          seconds={20}
          color="#116cff"
          size={50}
          alpha={1.0}
          showMilliseconds={false}
          onComplete={onTimesUp}
        />
      </div>
      <p className="text-center text-uppercase">
      {letters.map(letter =>
        letter + ' '
      )}
      </p>
      <div className={guessCorrect ? "row form-group has-success" : "row form-group has-warning"}>
        <div className="col-md-4 col-md-offset-4">
          <label htmlFor="guess">GUESS:</label>
          <input
            type="text"
            className="form-control text-center text-uppercase"
            bsStyle="success"
            id="guess"
            onChange={onChange}
            value={guess}
          />
        </div>
      </div>
    </div>
  );
};

GamePlay.propTypes = {
  letters: PropTypes.array.isRequired,
  guess: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  guessCorrect: PropTypes.bool.isRequired,
  onTimesUp: PropTypes.func.isRequired
};

export default GamePlay;