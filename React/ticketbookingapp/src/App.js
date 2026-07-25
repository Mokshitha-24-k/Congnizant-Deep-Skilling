import React, { useState } from 'react';

const GuestView = () => (
  <div style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '5px' }}>
    <h2>Browse Flights (Guest Mode)</h2>
    <ul><li>Flight 101 - NY to LA (View Only)</li></ul>
    <p><i>Please log in to book tickets.</i></p>
  </div>
);

const UserView = () => (
  <div style={{ backgroundColor: '#d4edda', padding: '20px', borderRadius: '5px' }}>
    <h2>Book Flights (User Mode)</h2>
    <ul><li>Flight 101 - NY to LA <button>Book Now</button></li></ul>
    <p><b>Welcome back! You can now book your tickets.</b></p>
  </div>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let authButton = isLoggedIn ? 
    <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
    <button onClick={() => setIsLoggedIn(true)}>Login</button>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '500px', margin: 'auto' }}>
      <h1>Flight Ticket Booking App</h1>
      <div style={{ marginBottom: '20px' }}>{authButton}</div>
      {!isLoggedIn && <p style={{ color: 'red' }}>Note: You are currently browsing as a guest.</p>}
      {isLoggedIn ? <UserView /> : <GuestView />}
    </div>
  );
};

export default App;
