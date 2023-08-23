import React, { useState } from 'react';
//import '../../Styles/HomePage/HomeUpload.css'

export default function HomeUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can perform your upload logic here
      console.log('Uploading file:', selectedFile.name);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Modern File Upload using Bootstrap</h3>
      <div className="mb-3">
        <label htmlFor="fileInput" className="form-label">
          Choose a file:
        </label>
        <input
          type="file"
          className="form-control"
          id="fileInput"
          accept="*.*"
          onChange={handleFileChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpload}>
        Upload
      </button>
      {selectedFile && (
        <div className="mt-3">
          <strong>Selected File:</strong> {selectedFile.name}
        </div>
      )}
    </div>
  );
}

