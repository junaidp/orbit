import React, { useState } from 'react';
import axios from 'axios';

const CompnySetp1 = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    linkedinUrl: '',
    primaryContactName: '',
    primaryContactEmail: '',
    primaryContactPhoneWhatsapp: '',
    primaryContactLinkedinProfileUrl: '',
    introductoryAgreement: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/company/save', formData);
      alert(response.data); // Show success message
    } catch (error) {
      console.error('Error saving company:', error);
      alert('Failed to save company details.');
    }
  };

  const formStyle = {
    padding: '20px',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px', // Added gap for consistent spacing
  };

  const fieldStyle = {
    flex: 1,
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 15px',
    backgroundColor: '#008c8c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={formStyle}>
      <div style={sectionStyle}>
        {/* Company Section */}
        <div style={fieldStyle}>
          <h3>Company</h3>
          <label style={labelStyle} htmlFor="companyName"></label>
         <input className="form-control h-40" placeholder="Company name" />

          <label style={labelStyle} htmlFor="linkedinUrl"></label>
         <input className="form-control h-40" placeholder="LinkedIn URL" />
          
        </div>

        {/* Primary Contact Section */}
        <div style={fieldStyle}>
          <h3>Primary Contact</h3>
          <label style={labelStyle} htmlFor="primaryContactName"></label>
        <input className="form-control h-40" placeholder="Name" />
          <label style={labelStyle} htmlFor="primaryContactEmail"></label>
          <input className="form-control h-40" placeholder="Email" />
          <label style={labelStyle} htmlFor="primaryContactPhoneWhatsapp"></label>
         <input className="form-control h-40" placeholder="Phone/WhatsApp" />
          <label style={labelStyle} htmlFor="primaryContactLinkedinProfileUrl"></label>
         <input className="form-control h-40" placeholder="LinkedIn Profile URL" />
        </div>

        {/* Introductory Agreement Section */}
        <div>
        <h3>Introductory Agreement</h3>
           
            
            <textarea
             id="introductoryAgreement"
             name="introductoryAgreement"
             value={formData.introductoryAgreement}
            placeholder="Paste in, or upload"
            className="form-control h-200"
          ></textarea>
          </div>
      </div>

      <button onClick={handleSubmit} style={buttonStyle}>
        Save
      </button>
    </div>
  );
};

export default CompnySetp1;
