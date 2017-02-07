import React, {PropTypes} from 'react';

const GamePlay = ({letters, guess, guessCorrect, onChange}) => {
  return (
    <div className="well">
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
  guessCorrect: PropTypes.bool.isRequired
};

export default GamePlay;