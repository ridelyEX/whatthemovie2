import React from 'react';

const PointsCounter = ({ points }) => {
  return (
    <div className="points-counter">
      <p>Points: {points}</p>
    </div>
  );
};

export default PointsCounter;