import React from 'react';
import './mystyle.css';

const CalculateScore = ({ Name, School, Total, Goal }) => {
  const average = Total / Goal;
  return (
    <div className="score-card">
      <h2>Student Score Calculator</h2>
      <div className="score-details">
        <p><b>Name:</b> {Name}</p>
        <p><b>School:</b> {School}</p>
        <p><b>Total Score:</b> {Total}</p>
        <p><b>Goal (Subjects):</b> {Goal}</p>
        <p><b>Average Score:</b> <span className="highlight">{average.toFixed(2)}</span></p>
      </div>
    </div>
  );
};

export default CalculateScore;
