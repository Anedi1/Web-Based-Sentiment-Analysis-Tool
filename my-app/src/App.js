import React from 'react'; // Import React library
import './App.css'; // Import CSS styles for the component

// Main functional component of the app
function App() {
  // Event handler for file input change event
  const handleFileChange = (event) => {
    // Get the first selected file from the input
    const file = event.target.files[0];
    
    // Check if a file was selected
    if (file) {
      // Log the selected file name to the console
      console.log('File selected:', file.name);
      
      // Show an alert popup displaying the selected file name
      alert(`Selected file: ${file.name}`);
    }
  };

  return (
    <div className="App">
      {/* Hidden file input element */}
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }} // Hide the file input from view
        onChange={handleFileChange} // Attach change event handler
      />
      
      {/* Button that triggers the hidden file input click */}
      <div className="center-wrapper">
        <button
          className="file-button-style"
          onClick={() => document.getElementById('fileInput').click()}
        >
          Upload File
        </button>
        <input type="file" id="fileInput" style={{ display: 'none' }} />
      </div>
    </div>
  );
}

export default App; // Export the component as default
