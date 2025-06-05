// my-app/src/App.js
import React, { useState } from 'react';
import './App.css';
import HistoryPanel from './Components/HistoryPanel'; 
import UploadFile from './Components/UploadFile';

// Main functional component of the app
function App() {
  const [fileCount, setFileCount] = useState(0); // Track file selections

  const handleFileSelected = () => {
    setFileCount(fileCount + 1); // Increment count
  };

  return (
    <div className="App">
      <div className="App-banner">
        <h1>Sentiment Analyzer</h1>
      </div>
      <div className="App-content">
        < UploadFile onFileSelected={handleFileSelected}/>
        <div className="history-panel">
          <HistoryPanel fileCount={fileCount}/>
        </div>
      </div>
    </div>
  );
}

export default App;