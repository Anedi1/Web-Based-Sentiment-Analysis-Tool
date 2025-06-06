// my-app/src/App.js
import React, { useState } from 'react';
import './App.css';
import HistoryPanel from './Components/HistoryPanel'; 
import UploadFile from './Components/UploadFile';
import TabNav from './Components/TabNav';

// Main functional component of the app
function App() {
  const [fileCount, setFileCount] = useState(0); // Track file selections
  const [activeTab, setActiveTab] = useState('main');

  const handleFileSelected = () => {
    setFileCount(fileCount + 1); // Increment count
  };

  return (
    <div className="App">
      <div className="App-banner">
        <h1>Sentiment Analyzer</h1>
        <TabNav activeTab={activeTab} setActiveTab={setActiveTab} /> 
      </div>
      <div className="App-content"> 
        {activeTab === 'main' ? ( 
          <div> 
            <UploadFile onFileSelected={handleFileSelected}/>
          </div> 
        ) : ( 
          <div className="history-panel">
            <HistoryPanel fileCount={fileCount}/>
          </div>
        )} 
      </div>
    </div>
  );
}

export default App;