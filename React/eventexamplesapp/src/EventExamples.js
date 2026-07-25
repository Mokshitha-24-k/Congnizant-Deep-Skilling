import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(0);

  const handleConvert = () => setEuro(Number(inr) * 0.011);

  return (
    <div style={{ marginTop: '30px', padding: '20px', borderTop: '2px solid #ccc' }}>
      <h3>Currency Convertor (INR to Euro)</h3>
      <input type="number" value={inr} onChange={(e) => setInr(e.target.value)} placeholder="Enter INR" />
      <button onClick={handleConvert} style={{ marginLeft: '10px' }}>Convert</button>
      <p><b>Equivalent Euro:</b> €{euro.toFixed(2)}</p>
    </div>
  );
};

const EventExamples = () => {
  const [count, setCount] = useState(0);
  const [clickMessage, setClickMessage] = useState('');

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);

  const welcomeMessage = (name) => alert("Welcome " + name);

  const handleMultipleMethods = (e) => {
    console.log("Synthetic event triggered:", e.type);
    setClickMessage("I was clicked!");
    welcomeMessage("React Learner");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Event Handling Examples</h2>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <span style={{ margin: '0 15px', fontWeight: 'bold' }}>Count: {count}</span>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <button onClick={handleMultipleMethods}>Click Me for Multiple Actions</button>
        <p style={{ color: 'blue', fontWeight: 'bold' }}>{clickMessage}</p>
      </div>
      <CurrencyConvertor />
    </div>
  );
};

export default EventExamples;
