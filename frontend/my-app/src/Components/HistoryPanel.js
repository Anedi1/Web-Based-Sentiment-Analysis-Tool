import React from 'react';

function HistoryPanel({ files }) {
  return (
    <div className="history-panel">
      <h2>Analysis History</h2>
      <h3>{files.length} recent analysed document{files.length !== 1 ? 's' : ''}</h3>
      <div className="file-name-list">
        <h4>Recent Files</h4>
        {files.length > 0 ? (
          <ul>
            {files.map((name, index) => (
              <li key={index} className="file-item">
                {name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default HistoryPanel;