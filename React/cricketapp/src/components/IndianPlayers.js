import React from 'react';

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

class IndianPlayer extends Player {
  constructor(name, score, type) {
    super(name, score);
    this.type = type;
  }
}

const IndianPlayers = () => {
  const T20Players = ['Rohit Sharma', 'Virat Kohli', 'Suryakumar Yadav', 'Hardik Pandya'];
  const RanjiPlayers = ['Sarfaraz Khan', 'Rajat Patidar'];

  const allPlayers = [...T20Players, ...RanjiPlayers];

  const [player1, player2, player3, player4, player5, player6] = allPlayers;
  const oddPlayers = [player1, player3, player5].filter(Boolean);
  const evenPlayers = [player2, player4, player6].filter(Boolean);

  const playerObjects = [
    new IndianPlayer('Rohit Sharma', 120, 'Batsman'),
    new IndianPlayer('Virat Kohli', 65, 'Batsman'),
    new IndianPlayer('Jasprit Bumrah', 10, 'Bowler'),
    new IndianPlayer('Sarfaraz Khan', 85, 'Batsman')
  ];

  const below70 = playerObjects.filter(player => player.score < 70);

  const playerScoreMap = new Map();
  playerObjects.forEach(p => playerScoreMap.set(p.name, p.score));

  const uniquePlayerTypes = new Set(playerObjects.map(p => p.type));

  return (
    <div style={{ border: '1px solid black', padding: '15px', marginTop: '10px' }}>
      <h2>Indian Players Detail</h2>
      <p><b>Merged T20 & Ranji Players:</b> {allPlayers.join(', ')}</p>
      <p><b>Odd Position Players:</b> {oddPlayers.join(', ')}</p>
      <p><b>Even Position Players:</b> {evenPlayers.join(', ')}</p>
      <p><b>Players Scoring Below 70:</b> {below70.map(p => p.name).join(', ')}</p>
      <p><b>Unique Player Types (Set):</b> {Array.from(uniquePlayerTypes).join(', ')}</p>
    </div>
  );
};

export default IndianPlayers;
