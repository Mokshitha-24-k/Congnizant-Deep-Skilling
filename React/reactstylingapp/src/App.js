import React, { useState } from 'react';
import styles from './CohortDetails.module.css';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(true);

  const inlineStyle = {
    backgroundColor: '#fffacd',
    padding: '10px',
    border: '1px solid orange'
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Cohort Details</h1>
      <p className="standard-text">This text uses a standard CSS className.</p>
      <p style={inlineStyle}>This paragraph is styled using inline styles.</p>
      <p style={{ color: isActive ? 'green' : 'red', fontWeight: 'bold' }}>
        Current Status: {isActive ? 'Active' : 'Inactive'} (Conditional Color)
      </p>
      <button onClick={() => setIsActive(!isActive)}>Toggle Status</button>
    </div>
  );
}

export default App;
