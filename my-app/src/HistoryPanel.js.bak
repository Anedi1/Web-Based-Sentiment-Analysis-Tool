// src/HistoryPanel.js
import React, { useEffect, useState } from 'react';
//import React from 'react';

function HistoryPanel({ fileCount }) {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/history')
      .then(res => res.json())
      .then(data => setHistory(data.history));
  }, []);
  return (
    <>
      <h2>Analysis History</h2>
      <h3>{fileCount} recent analysed document{fileCount !== 1 ? 's' : ''}</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item.text}: {item.result}</li>
        ))}
      </ul>
    </>
  );
}

export default HistoryPanel;