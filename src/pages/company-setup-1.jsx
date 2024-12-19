import React, { useState, useEffect } from "react";
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

  const [companyDetails, setCompanyDetails] = useState([]); // State for fetched data
  const [isTreeOpen, setIsTreeOpen] = useState(false); // State for toggling tree view

  // Fetch company details from the server
  const fetchCompanyDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/company/all");
      setCompanyDetails(response.data); // Store fetched data in state
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchCompanyDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/api/company/save", formData);
      fetchCompanyDetails(); // Immediately refresh table
      alert("Company details saved successfully!");
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
          <input
            className="form-control h-40"
            placeholder="Company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            className="form-control h-40"
            placeholder="LinkedIn URL"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn btn-primary">
            Save
          </button>
        </div>

        {/* Primary Contact Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Primary Contact</h3>
          <input
            className="form-control h-40"
            placeholder="Name"
            name="primaryContactName"
            value={formData.primaryContactName}
            onChange={handleChange}
          />
          <input
            className="form-control h-40"
            placeholder="Email"
            name="primaryContactEmail"
            value={formData.primaryContactEmail}
            onChange={handleChange}
          />
          <input
            className="form-control h-40"
            placeholder="Phone/WhatsApp"
            name="primaryContactPhoneWhatsapp"
            value={formData.primaryContactPhoneWhatsapp}
            onChange={handleChange}
          />
          <input
            className="form-control h-40"
            placeholder="LinkedIn Profile URL"
            name="primaryContactLinkedinProfileUrl"
            value={formData.primaryContactLinkedinProfileUrl}
            onChange={handleChange}
          />
        </div>

        {/* Introductory Agreement Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Introductory Agreement</h3>
          <textarea
            placeholder="Paste in, or upload"
            className="form-control h-200"
            name="introductoryAgreement"
            value={formData.introductoryAgreement}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      {/* Company Details Table */}
      <div>
      
        <div className="tree-item">
        <div
          className="tree-title"
          onClick={() => setIsTreeOpen(!isTreeOpen)}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#008080",
          }}
        >
          {isTreeOpen ? "▼ Company Details" : "► Company Details"}
        </div>
          {isTreeOpen && (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>LinkedIn URL</th>
                  <th>Contact Name</th>
                  <th>Email</th>
                  <th>Phone/WhatsApp</th>
                  <th>LinkedIn Profile</th>
                  <th>Introductory Agreement</th>
                  <th>Inclusion</th>
                  <th>Exclusions People and Role Type</th>
                  <th>Exclusions Competitors</th>
                  <th>Exclusions Existing Clients</th>
                  <th>Client Testimonials</th>
                  <th>Referral Payment History</th>
                  <th>How It Works</th>
                </tr>
              </thead>
              <tbody>
                {companyDetails.length > 0 ? (
                  companyDetails.map((company, index) => (
                    <tr key={index}>
                      <td>{company.companyName || "-"}</td>
                      <td>{company.linkedinUrl || "-"}</td>
                      <td>{company.primaryContactName || "-"}</td>
                      <td>{company.primaryContactEmail || "-"}</td>
                      <td>{company.primaryContactPhoneWhatsapp || "-"}</td>
                      <td>{company.primaryContactLinkedinProfileUrl || "-"}</td>
                      <td>{company.introductoryAgreement || "-"}</td>
                      <td>{company.inclusions || "-"}</td>
                      <td>{company.exclusionsPeopleAndRoleType || "-"}</td>
                      <td>{company.exclusionsCompetitors || "-"}</td>
                      <td>{company.exclusionsExistingClients || "-"}</td>
                      <td>{company.clientTestimonials || "-"}</td>
                      <td>{company.referralPaymentHistory || "-"}</td>
                      <td>{company.howItWorks || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="14" className="text-center">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompnySetp1;
