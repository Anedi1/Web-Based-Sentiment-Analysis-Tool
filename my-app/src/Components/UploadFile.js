// src/UploadFile.js
import React, { useRef } from 'react';

function UploadFile({ onFileSelected }) {
  const fileInputRef = useRef(null); // Ref for the file input

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      alert(`Selected file: ${file.name}`);
      onFileSelected(); // Call callback to increment count
    } else {
      console.log('No file selected');
    }
  };

  const handleButtonClick = () => {
    console.log('Upload button clicked'); // Debug
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.log('File input not found');
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button
        className="upload-button"
        onClick={handleButtonClick}
      >
        Upload File
      </button>
    </div>
  );
}

export default UploadFile;