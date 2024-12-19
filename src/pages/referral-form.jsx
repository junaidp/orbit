import React, { useState, useEffect } from "react";
import axios from "axios";

const ReferralForm = () => {
  const [referralData, setReferralData] = useState([]); // State to store fetched data
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    opportunityDetails: "",
    possibleValue: "",
    contactName: "",
    contactPosition: "",
    contactEmail: "",
    contactPhone: "",
    accountName: "",
    sortCode: "",
    accountNumber: "",
  });
  const [isTreeOpen, setIsTreeOpen] = useState(false); // State for toggling data display

  // Fetch data from server
  const fetchReferralData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/referrals");
      setReferralData(response.data);
    } catch (error) {
      console.error("Error fetching referral data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchReferralData();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle save button
  const handleSave = async () => {
    try {
      await axios.post("http://localhost:8080/api/referrals", formData);
      alert("Referral data saved successfully!");
      fetchReferralData(); // Refresh the grid after saving
      setFormData({
        companyName: "",
        sector: "",
        opportunityDetails: "",
        possibleValue: "",
        contactName: "",
        contactPosition: "",
        contactEmail: "",
        contactPhone: "",
        accountName: "",
        sortCode: "",
        accountNumber: "",
      });
    } catch (error) {
      console.error("Error saving referral data:", error);
      alert("Failed to save referral data. Please try again.");
    }
  };

  return (
    <div>
      <div className="row">
        {/* Opportunity Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Opportunity</h3>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Company name"
          />
          <input
            name="sector"
            value={formData.sector}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Sector"
          />
          <textarea
            name="opportunityDetails"
            value={formData.opportunityDetails}
            onChange={handleInputChange}
            className="form-control h-200"
            placeholder="Opportunity details"
          ></textarea>
          <input
            name="possibleValue"
            value={formData.possibleValue}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Possible value"
          />
        </div>

        {/* Contact's Details Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Contact's Details</h3>
          <p style={{ fontSize: "12px", color: "gray" }}>
            These won't be shared with Nexer until they accept the referral, so
            that they can't contact them before speaking to you.
          </p>
          <input
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Contact's name"
          />
          <input
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Contact's Position"
          />
          <input
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Contact's Email"
          />
          <input
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Contact's Phone"
          />
        </div>

        {/* Payment Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Payment</h3>
          <input
            name="accountName"
            value={formData.accountName}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Account Name"
          />
          <input
            name="sortCode"
            value={formData.sortCode}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Sort Code"
          />
          <input
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Account Number"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-4">
        <button onClick={handleSave} className="btn btn-primary">
          Save
        </button>
      </div>
      <div style={{ marginTop: "20px" }}></div>
      {/* Referral Data Grid */}
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
          {isTreeOpen ? "▼ Referral Data" : "► Referral Data"}
        </div>
        {isTreeOpen && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Sector</th>
                <th>Opportunity Details</th>
                <th>Possible Value</th>
                <th>Contact Name</th>
                <th>Contact Position</th>
                <th>Contact Email</th>
                <th>Contact Phone</th>
                <th>Account Name</th>
                <th>Sort Code</th>
                <th>Account Number</th>
              </tr>
            </thead>
            <tbody>
              {referralData.length > 0 ? (
                referralData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.companyName || "-"}</td>
                    <td>{item.sector || "-"}</td>
                    <td>{item.opportunityDetails || "-"}</td>
                    <td>{item.possibleValue || "-"}</td>
                    <td>{item.contactName || "-"}</td>
                    <td>{item.contactPosition || "-"}</td>
                    <td>{item.contactEmail || "-"}</td>
                    <td>{item.contactPhone || "-"}</td>
                    <td>{item.accountName || "-"}</td>
                    <td>{item.sortCode || "-"}</td>
                    <td>{item.accountNumber || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="text-center">
                    No referral data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ReferralForm;
