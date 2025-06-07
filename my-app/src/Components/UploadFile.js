import React, { useRef, useState } from 'react';

function UploadFile({ onFileSelected }) {
  const fileInputRef = useRef(null); // Reference to the hidden file input
  const [previewURL, setPreviewURL] = useState(null); // Stores preview URL
  const [fileType, setFileType] = useState(null);     // Stores file MIME type
  const [fileName, setFileName] = useState(null);     // Stores file name

  // Triggered when a user selects a file
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get selected file
    if (file) {
      onFileSelected?.(); // Optional callback to parent

      const fileURL = URL.createObjectURL(file);
      setPreviewURL(fileURL);
      setFileType(file.type);
      setFileName(file.name);
    } else {
      setPreviewURL(null);
      setFileType(null);
      setFileName(null);
    }
  };

  // Handles click on "Upload PDF" button
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="upload-wrapper">
      {/* Hidden file input, accepts only PDFs */}
      <input
        type="file"
        ref={fileInputRef}
        accept="application/pdf"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* Upload button */}
      <button className="upload-button" onClick={handleButtonClick}>
        Select PDF File
      </button>

      {/* Display file name, if one is selected */}
      {fileName && (
        <div className="file-name">
          <span className="file-label">Selected file:</span>
          <span className="file-value">{fileName}</span>
        </div>
      )}


      {/* PDF preview section */}
      {previewURL && fileType === 'application/pdf' && (
        <div className="preview-section">
          <h3>Document Preview</h3>
          <iframe
            src={previewURL}
            title="PDF Preview"
            className="pdf-preview"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default UploadFile;
