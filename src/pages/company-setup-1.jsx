import React, { useState } from "react";
import axios from "axios";

const CompnySetp1 = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    linkedinUrl: "",
    primaryContactName: "",
    primaryContactEmail: "",
    primaryContactPhoneWhatsapp: "",
    primaryContactLinkedinProfileUrl: "",
    introductoryAgreement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/company/save",
        formData
      );
      alert(response.data); // Show success message
    } catch (error) {
      console.error("Error saving company:", error);
      alert("Failed to save company details.");
    }
  };

  return (
    <div>
      <div className="row">
        {/* Company Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Company</h3>
          <label htmlFor="companyName"></label>
          <input className="form-control h-40" placeholder="Company name" />

          <label htmlFor="linkedinUrl"></label>
          <input className="form-control h-40" placeholder="LinkedIn URL" />
          <button onClick={handleSubmit} className="btn btn-primary">
            Save
          </button>
        </div>

        {/* Primary Contact Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Primary Contact</h3>
          <input className="form-control h-40" placeholder="Name" />
          <input className="form-control h-40" placeholder="Email" />

          <input className="form-control h-40" placeholder="Phone/WhatsApp" />

          <input
            className="form-control h-40"
            placeholder="LinkedIn Profile URL"
          />
        </div>

        {/* Introductory Agreement Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Introductory Agreement</h3>

          <textarea
            id="introductoryAgreement"
            name="introductoryAgreement"
            value={formData.introductoryAgreement}
            placeholder="Paste in, or upload"
            className="form-control h-200"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CompnySetp1;
