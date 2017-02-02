import React, {PropTypes} from 'react';

const GamePlay = ({letters, currentGuess, onChange}) => {
  return (
    <div className="well">
      <p className="text-center text-uppercase">
      {letters.map(letter =>
        letter + ' '
      )}
      </p>
      <div className="row form-group">
        <div className="col-md-4 col-md-offset-4">
          <label htmlFor="guess">GUESS:</label>
          <input type="text" className="text-center text-uppercase" id="guess" onChange={onChange} value={currentGuess}/>
        </div>
      </div>
    </div>
  );
};

GamePlay.propTypes = {
  letters: PropTypes.array.isRequired,
  currentGuess: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default GamePlay;