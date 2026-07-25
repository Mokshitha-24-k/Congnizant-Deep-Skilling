const fs = require('fs');
const path = require('path');

const projects = [
  // 1. myfirstreact
  {
    name: 'myfirstreact',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/App.js': `import React from 'react';\n\nfunction App() {\n  return (\n    <div className="App">\n      <h1>Welcome to the first session of React</h1>\n    </div>\n  );\n}\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "myfirstreact",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  },
  // 2. StudentApp
  {
    name: 'StudentApp',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/components/Home.js': `import React, { Component } from 'react';\n\nclass Home extends Component {\n  render() {\n    return <h2>Welcome to the Home Page of StudentApp</h2>;\n  }\n}\n\nexport default Home;\n`,
      'src/components/About.js': `import React, { Component } from 'react';\n\nclass About extends Component {\n  render() {\n    return <h2>Welcome to the About Page of StudentApp</h2>;\n  }\n}\n\nexport default About;\n`,
      'src/components/Contact.js': `import React, { Component } from 'react';\n\nclass Contact extends Component {\n  render() {\n    return <h2>Welcome to the Contact Page of StudentApp</h2>;\n  }\n}\n\nexport default Contact;\n`,
      'src/App.js': `import React, { Component } from 'react';\nimport Home from './components/Home';\nimport About from './components/About';\nimport Contact from './components/Contact';\n\nclass App extends Component {\n  render() {\n    return (\n      <div>\n        <h1>Student Application</h1>\n        <Home />\n        <About />\n        <Contact />\n      </div>\n    );\n  }\n}\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "studentapp",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  },
  // 3. scorecalculatorapp
  {
    name: 'scorecalculatorapp',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/mystyle.css': `.score-card { border: 2px solid #4CAF50; border-radius: 8px; padding: 20px; max-width: 400px; margin: 20px auto; font-family: Arial, sans-serif; background-color: #f9f9f9; }\n.score-card h2 { color: #333; text-align: center; }\n.score-details { font-size: 16px; line-height: 1.5; }\n.highlight { font-weight: bold; color: #d32f2f; }\n`,
      'src/CalculateScore.js': `import React from 'react';\nimport './mystyle.css';\n\nconst CalculateScore = ({ Name, School, Total, Goal }) => {\n  const average = Total / Goal;\n  return (\n    <div className="score-card">\n      <h2>Student Score Calculator</h2>\n      <div className="score-details">\n        <p><b>Name:</b> {Name}</p>\n        <p><b>School:</b> {School}</p>\n        <p><b>Total Score:</b> {Total}</p>\n        <p><b>Goal (Subjects):</b> {Goal}</p>\n        <p><b>Average Score:</b> <span className="highlight">{average.toFixed(2)}</span></p>\n      </div>\n    </div>\n  );\n};\n\nexport default CalculateScore;\n`,
      'src/App.js': `import React from 'react';\nimport CalculateScore from './CalculateScore';\n\nfunction App() {\n  return (\n    <div>\n      <CalculateScore Name="John Doe" School="Greenwood High" Total={420} Goal={5} />\n    </div>\n  );\n}\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "scorecalculatorapp",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  },
  // 4. blogapp
  {
    name: 'blogapp',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/components/Post.js': `import React, { Component } from 'react';\n\nclass Post extends Component {\n  render() {\n    const { title, body } = this.props.post;\n    return (\n      <div style={{ border: '1px solid #ccc', margin: '15px', padding: '15px', borderRadius: '5px' }}>\n        <h3>{title}</h3>\n        <p>{body}</p>\n      </div>\n    );\n  }\n}\n\nexport default Post;\n`,
      'src/components/Posts.js': `import React, { Component } from 'react';\nimport Post from './Post';\n\nclass Posts extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { posts: [], error: null };\n  }\n\n  componentDidMount() {\n    fetch('https://jsonplaceholder.typicode.com/posts')\n      .then(response => {\n        if (!response.ok) throw new Error('Network response was not ok');\n        return response.json();\n      })\n      .then(data => this.setState({ posts: data.slice(0, 10) }))\n      .catch(error => this.setState({ error }));\n  }\n\n  componentDidCatch(error, info) {\n    console.error("Error caught by componentDidCatch:", error, info);\n    this.setState({ error: error });\n  }\n\n  render() {\n    if (this.state.error) {\n      return <h2>Error loading posts: {this.state.error.message}</h2>;\n    }\n    return (\n      <div>\n        <h2>Blog Posts</h2>\n        {this.state.posts.map(post => (\n          <Post key={post.id} post={post} />\n        ))}\n      </div>\n    );\n  }\n}\n\nexport default Posts;\n`,
      'src/App.js': `import React from 'react';\nimport Posts from './components/Posts';\n\nfunction App() {\n  return (\n    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>\n      <h1>My Blog App</h1>\n      <Posts />\n    </div>\n  );\n}\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "blogapp",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  },
  // 5. reactstylingapp
  {
    name: 'reactstylingapp',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/CohortDetails.module.css': `.container {\n  border: 2px solid darkblue;\n  padding: 20px;\n  border-radius: 10px;\n  margin: 20px;\n  background-color: #f0f8ff;\n}\n\n.heading {\n  text-decoration: underline;\n}\n`,
      'src/App.css': `.standard-text {\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n`,
      'src/App.js': `import React, { useState } from 'react';\nimport styles from './CohortDetails.module.css';\nimport './App.css';\n\nfunction App() {\n  const [isActive, setIsActive] = useState(true);\n\n  const inlineStyle = {\n    backgroundColor: '#fffacd',\n    padding: '10px',\n    border: '1px solid orange'\n  };\n\n  return (\n    <div className={styles.container}>\n      <h1 className={styles.heading}>Cohort Details</h1>\n      <p className="standard-text">This text uses a standard CSS className.</p>\n      <p style={inlineStyle}>This paragraph is styled using inline styles.</p>\n      <p style={{ color: isActive ? 'green' : 'red', fontWeight: 'bold' }}>\n        Current Status: {isActive ? 'Active' : 'Inactive'} (Conditional Color)\n      </p>\n      <button onClick={() => setIsActive(!isActive)}>Toggle Status</button>\n    </div>\n  );\n}\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "reactstylingapp",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  },
  // 6. cricketapp
  {
    name: 'cricketapp',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/components/IndianPlayers.js': `import React from 'react';\n\nclass Player {\n  constructor(name, score) {\n    this.name = name;\n    this.score = score;\n  }\n}\n\nclass IndianPlayer extends Player {\n  constructor(name, score, type) {\n    super(name, score);\n    this.type = type;\n  }\n}\n\nconst IndianPlayers = () => {\n  const T20Players = ['Rohit Sharma', 'Virat Kohli', 'Suryakumar Yadav', 'Hardik Pandya'];\n  const RanjiPlayers = ['Sarfaraz Khan', 'Rajat Patidar'];\n\n  const allPlayers = [...T20Players, ...RanjiPlayers];\n\n  const [player1, player2, player3, player4, player5, player6] = allPlayers;\n  const oddPlayers = [player1, player3, player5].filter(Boolean);\n  const evenPlayers = [player2, player4, player6].filter(Boolean);\n\n  const playerObjects = [\n    new IndianPlayer('Rohit Sharma', 120, 'Batsman'),\n    new IndianPlayer('Virat Kohli', 65, 'Batsman'),\n    new IndianPlayer('Jasprit Bumrah', 10, 'Bowler'),\n    new IndianPlayer('Sarfaraz Khan', 85, 'Batsman')\n  ];\n\n  const below70 = playerObjects.filter(player => player.score < 70);\n\n  const playerScoreMap = new Map();\n  playerObjects.forEach(p => playerScoreMap.set(p.name, p.score));\n\n  const uniquePlayerTypes = new Set(playerObjects.map(p => p.type));\n\n  return (\n    <div style={{ border: '1px solid black', padding: '15px', marginTop: '10px' }}>\n      <h2>Indian Players Detail</h2>\n      <p><b>Merged T20 & Ranji Players:</b> {allPlayers.join(', ')}</p>\n      <p><b>Odd Position Players:</b> {oddPlayers.join(', ')}</p>\n      <p><b>Even Position Players:</b> {evenPlayers.join(', ')}</p>\n      <p><b>Players Scoring Below 70:</b> {below70.map(p => p.name).join(', ')}</p>\n      <p><b>Unique Player Types (Set):</b> {Array.from(uniquePlayerTypes).join(', ')}</p>\n    </div>\n  );\n};\n\nexport default IndianPlayers;\n`,
      'src/components/ListofPlayers.js': `import React from 'react';\nimport IndianPlayers from './IndianPlayers';\n\nconst ListofPlayers = () => {\n  let showIndianPlayers = true;\n  return (\n    <div>\n      <h1>List of Cricket Players</h1>\n      {showIndianPlayers ? <IndianPlayers /> : <p>No Indian players to display right now.</p>}\n    </div>\n  );\n};\n\nexport default ListofPlayers;\n`,
      'src/App.js': `import React from 'react';\nimport ListofPlayers from './components/ListofPlayers';\n\nfunction App() {\n  return (\n    <div style={{ padding: '20px', fontFamily: 'Arial' }}>\n      <ListofPlayers />\n    </div>\n  );\n}\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "cricketapp",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  },
  // 7. officespacerentalapp
  {
    name: 'officespacerentalapp',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/OfficeSpace.js': `import React from 'react';\n\nconst OfficeSpace = () => {\n  const offices = [\n    { id: 1, name: 'Downtown Tech Hub', rent: 55000, address: '123 Downtown St', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300' },\n    { id: 2, name: 'Uptown Business Park', rent: 85000, address: '456 Uptown Blvd', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300' },\n    { id: 3, name: 'Suburban Co-working', rent: 45000, address: '789 Suburban Lane', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300' }\n  ];\n\n  return (\n    <div>\n      <h1 style={{ textAlign: 'center', color: '#333' }}>Available Office Spaces</h1>\n      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>\n        {offices.map(office => (\n          <div key={office.id} style={{ border: '1px solid #ccc', borderRadius: '8px', margin: '15px', padding: '15px', width: '300px' }}>\n            <img src={office.image} alt={office.name} style={{ width: '100%', borderRadius: '4px' }} />\n            <h2>{office.name}</h2>\n            <p>{office.address}</p>\n            <p style={{ fontWeight: 'bold', fontSize: '18px', color: office.rent < 60000 ? 'red' : 'green' }}>\n              Rent: Rs. {office.rent.toLocaleString()}\n            </p>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default OfficeSpace;\n`,
      'src/App.js': `import React from 'react';\nimport OfficeSpace from './OfficeSpace';\n\nfunction App() {\n  return <OfficeSpace />;\n}\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "officespacerentalapp",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  },
  // 8. eventexamplesapp
  {
    name: 'eventexamplesapp',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/EventExamples.js': `import React, { useState } from 'react';\n\nconst CurrencyConvertor = () => {\n  const [inr, setInr] = useState('');\n  const [euro, setEuro] = useState(0);\n\n  const handleConvert = () => setEuro(Number(inr) * 0.011);\n\n  return (\n    <div style={{ marginTop: '30px', padding: '20px', borderTop: '2px solid #ccc' }}>\n      <h3>Currency Convertor (INR to Euro)</h3>\n      <input type="number" value={inr} onChange={(e) => setInr(e.target.value)} placeholder="Enter INR" />\n      <button onClick={handleConvert} style={{ marginLeft: '10px' }}>Convert</button>\n      <p><b>Equivalent Euro:</b> €{euro.toFixed(2)}</p>\n    </div>\n  );\n};\n\nconst EventExamples = () => {\n  const [count, setCount] = useState(0);\n  const [clickMessage, setClickMessage] = useState('');\n\n  const handleIncrement = () => setCount(prev => prev + 1);\n  const handleDecrement = () => setCount(prev => prev - 1);\n\n  const welcomeMessage = (name) => alert("Welcome " + name);\n\n  const handleMultipleMethods = (e) => {\n    console.log("Synthetic event triggered:", e.type);\n    setClickMessage("I was clicked!");\n    welcomeMessage("React Learner");\n  };\n\n  return (\n    <div style={{ padding: '20px', fontFamily: 'Arial' }}>\n      <h2>Event Handling Examples</h2>\n      <div style={{ marginBottom: '20px' }}>\n        <button onClick={handleIncrement}>Increment</button>\n        <span style={{ margin: '0 15px', fontWeight: 'bold' }}>Count: {count}</span>\n        <button onClick={handleDecrement}>Decrement</button>\n      </div>\n      <div>\n        <button onClick={handleMultipleMethods}>Click Me for Multiple Actions</button>\n        <p style={{ color: 'blue', fontWeight: 'bold' }}>{clickMessage}</p>\n      </div>\n      <CurrencyConvertor />\n    </div>\n  );\n};\n\nexport default EventExamples;\n`,
      'src/App.js': `import React from 'react';\nimport EventExamples from './EventExamples';\n\nfunction App() {\n  return <EventExamples />;\n}\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "eventexamplesapp",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  },
  // 9. ticketbookingapp
  {
    name: 'ticketbookingapp',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/App.js': `import React, { useState } from 'react';\n\nconst GuestView = () => (\n  <div style={{ backgroundColor: '#fff3cd', padding: '20px', borderRadius: '5px' }}>\n    <h2>Browse Flights (Guest Mode)</h2>\n    <ul><li>Flight 101 - NY to LA (View Only)</li></ul>\n    <p><i>Please log in to book tickets.</i></p>\n  </div>\n);\n\nconst UserView = () => (\n  <div style={{ backgroundColor: '#d4edda', padding: '20px', borderRadius: '5px' }}>\n    <h2>Book Flights (User Mode)</h2>\n    <ul><li>Flight 101 - NY to LA <button>Book Now</button></li></ul>\n    <p><b>Welcome back! You can now book your tickets.</b></p>\n  </div>\n);\n\nconst App = () => {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n  let authButton = isLoggedIn ? \n    <button onClick={() => setIsLoggedIn(false)}>Logout</button> : \n    <button onClick={() => setIsLoggedIn(true)}>Login</button>;\n\n  return (\n    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '500px', margin: 'auto' }}>\n      <h1>Flight Ticket Booking App</h1>\n      <div style={{ marginBottom: '20px' }}>{authButton}</div>\n      {!isLoggedIn && <p style={{ color: 'red' }}>Note: You are currently browsing as a guest.</p>}\n      {isLoggedIn ? <UserView /> : <GuestView />}\n    </div>\n  );\n};\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "ticketbookingapp",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  },
  // 10. bloggerapp
  {
    name: 'bloggerapp',
    files: {
      'public/index.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>React App</title></head><body><div id="root"></div></body></html>`,
      'src/components/BookDetails.js': `import React from 'react';\nexport const BookDetails = ({ item }) => (\n  <div style={{ border: '2px solid #007bff', margin: '10px', padding: '10px' }}>\n    <h3 style={{ color: '#007bff' }}>📚 Book Details</h3>\n    <p><b>Title:</b> {item.title}</p>\n  </div>\n);\n`,
      'src/components/BlogDetails.js': `import React from 'react';\nexport const BlogDetails = ({ item }) => (\n  <div style={{ border: '2px solid #28a745', margin: '10px', padding: '10px' }}>\n    <h3 style={{ color: '#28a745' }}>📝 Blog Details</h3>\n    <p><b>Topic:</b> {item.title}</p>\n  </div>\n);\n`,
      'src/components/CourseDetails.js': `import React from 'react';\nexport const CourseDetails = ({ item }) => (\n  <div style={{ border: '2px solid #fd7e14', margin: '10px', padding: '10px' }}>\n    <h3 style={{ color: '#fd7e14' }}>🎓 Course Details</h3>\n    <p><b>Course Name:</b> {item.title}</p>\n  </div>\n);\n`,
      'src/App.js': `import React from 'react';\nimport { BookDetails } from './components/BookDetails';\nimport { BlogDetails } from './components/BlogDetails';\nimport { CourseDetails } from './components/CourseDetails';\n\nconst App = () => {\n  const contentData = [\n    { id: 'b1', type: 'book', title: 'React for Beginners' },\n    { id: 'bl1', type: 'blog', title: 'Understanding Hooks in React' },\n    { id: 'c1', type: 'course', title: 'Fullstack Web Development' }\n  ];\n\n  const renderContentWithSwitch = (item) => {\n    switch (item.type) {\n      case 'book': return <BookDetails key={item.id} item={item} />;\n      case 'blog': return <BlogDetails key={item.id} item={item} />;\n      case 'course': return <CourseDetails key={item.id} item={item} />;\n      default: return null;\n    }\n  };\n\n  return (\n    <div style={{ padding: '20px', fontFamily: 'Arial' }}>\n      <h1>Blogger Content Hub</h1>\n      <h2>Rendering List via Switch</h2>\n      {contentData.map(item => renderContentWithSwitch(item))}\n      <hr />\n      <h2>Rendering List via Ternary & Logical &&</h2>\n      {contentData.map(item => (\n        <React.Fragment key={'inline-'+item.id}>\n          {item.type === 'book' ? <BookDetails item={item} /> : null}\n          {item.type === 'blog' && <BlogDetails item={item} />}\n          {item.type === 'course' && <CourseDetails item={item} />}\n        </React.Fragment>\n      ))}\n    </div>\n  );\n};\n\nexport default App;\n`,
      'src/index.js': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n`,
      'package.json': `{\n  "name": "bloggerapp",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-scripts": "5.0.1"\n  },\n  "scripts": {\n    "start": "react-scripts start"\n  }\n}`
    }
  }
];

projects.forEach(project => {
  const projectPath = path.join(__dirname, project.name);
  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath, { recursive: true });
  }
  
  Object.keys(project.files).forEach(filePath => {
    const fullFilePath = path.join(projectPath, filePath);
    const dir = path.dirname(fullFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullFilePath, project.files[filePath], 'utf8');
  });
  console.log('Created project: ' + project.name);
});
console.log('All projects created successfully!');
