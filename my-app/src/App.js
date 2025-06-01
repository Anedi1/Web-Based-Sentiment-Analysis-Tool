import React from 'react';
import './App.css';

function App() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      alert(`Selected file: ${file.name}`);
    }
  };

  return (
    <div className="App">
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={() => document.getElementById('fileInput').click()}>
        Upload File
      </button>
    </div>
  );
}

export default App;
