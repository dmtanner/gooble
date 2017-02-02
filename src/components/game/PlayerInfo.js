import React, {PropTypes} from 'react';

const PlayerInfo = ({player}) => {
  return (
    <div className="well col-md-4">
      <h2>{player.name}</h2>
    </div>
  );
};

PlayerInfo.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerInfo;