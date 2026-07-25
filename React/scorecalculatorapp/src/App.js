import React from 'react';
import CalculateScore from './CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name="John Doe" School="Greenwood High" Total={420} Goal={5} />
    </div>
  );
}

export default App;
