import React from 'react';
import IndianPlayers from './IndianPlayers';

const ListofPlayers = () => {
  let showIndianPlayers = true;
  return (
    <div>
      <h1>List of Cricket Players</h1>
      {showIndianPlayers ? <IndianPlayers /> : <p>No Indian players to display right now.</p>}
    </div>
  );
};

export default ListofPlayers;
