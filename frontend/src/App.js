import React, { useEffect, useState } from 'react';
import './App.css'; 

function App() {
  const [facts, setFacts] = useState([]);
  const apiUrl = 'http://ai-trivia-env.eba-nkhvmyhc.us-west-2.elasticbeanstalk.com/api/facts/';
  useEffect(() => {
    fetch(apiUrl) 
      .then(response => response.json())
      .then(data => setFacts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🤖 AI & ML Trivia Hub</h1>
        <p>Discover the history of artificial intelligence.</p>
        
        <div className="fact-container">
          {facts.map((item) => (
            <div key={item.id} className="fact-card">
              <span className="fact-id">DATA_NODE_0{item.id}</span>
              <p>{item.fact}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;