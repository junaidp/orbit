import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:8080/api/upload-excel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("File uploaded successfully: " + selectedFile.name);
      setIsSuccess(true); // Set success state to true
    } catch (error) {
      if (error.response) {
        setMessage("Error: " + error.response.data);
      } else {
        setMessage("An error occurred: " + error.message);
      }
      setIsSuccess(false); // Set success state to false
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && (
        <p style={{ color: isSuccess ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
