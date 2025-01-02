import React, { useState, useEffect } from "react";
import axios from "axios";

const IncentiveSetup = () => {
  const [incentiveData, setIncentiveData] = useState([]); // State for fetched data
  const [formData, setFormData] = useState({
    campaignName: "",
    startDate: "",
    endDate: "",
    targetType: "",
    incentive: "",
    buyerIncentive: "",
  });
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [isTreeOpen, setIsTreeOpen] = useState(false); // Tree toggle state

  // Fetch data from server
  const fetchIncentiveData = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(
        "https://2660-2a0a-a547-f2a0-0-b8ae-d478-c531-347d.ngrok-free.app/api/incentives",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      setIncentiveData(response.data || []);
    } catch (error) {
      console.error("Error fetching incentive data:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchIncentiveData();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle save button click
  const handleSave = async () => {
    try {
      setLoading(true); // Start loading
      await axios.post(
        "https://2660-2a0a-a547-f2a0-0-b8ae-d478-c531-347d.ngrok-free.app/api/incentives",
        formData,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      alert("Incentive saved successfully!");
      await fetchIncentiveData(); // Refresh data instantly
      setFormData({
        campaignName: "",
        startDate: "",
        endDate: "",
        targetType: "",
        incentive: "",
        buyerIncentive: "",
      });
    } catch (error) {
      console.error("Error saving incentive data:", error);
      alert("Error saving data. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div>
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 mb-4">
          <input
            name="campaignName"
            value={formData.campaignName}
            onChange={handleInputChange}
            className="form-control h-40"
            placeholder="Campaign name"
          />
          <div className="d-flex gap-4 mt-2">
            <input
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="form-control h-40 flex-1"
              placeholder="Start date"
              type="date"
            />
            <input
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="form-control h-40 flex-1"
              placeholder="End date"
              type="date"
            />
          </div>
          <div className="mt-4">
            <h1 className="heading">TARGET</h1>
            <div>
              <div className="d-flex gap-2 item-center">
                <input
                  type="radio"
                  name="targetType"
                  value="General"
                  onChange={handleInputChange}
                  className="h-22 w-22 mt-15"
                />
                <p className="mt-3 m-0 p-0">General</p>
              </div>
              <div className="d-flex gap-2 item-center">
                <input
                  type="radio"
                  name="targetType"
                  value="Targetted"
                  onChange={handleInputChange}
                  className="h-22 w-22 mt-15"
                />
                <p className="mt-3 m-0 p-0">Targetted</p>
              </div>
            </div>
          </div>
          {/* Save Button */}
          <div className="mt-4">
            <button
              onClick={handleSave}
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-lg-4 mb-4">
          <h1 className="heading" style={{ color: "#008080" }}>
            INCENTIVE
          </h1>
          <div>
            <div className="d-flex gap-2 item-center">
              <input
                type="radio"
                name="incentive"
                value="Fixed Fee"
                onChange={handleInputChange}
                className="h-22 w-22 mt-15"
              />
              <p className="mt-3 p-0 m-0">Fixed fee</p>
            </div>
            <div className="d-flex gap-2 mb-2 item-center">
              <input
                type="radio"
                name="incentive"
                value="Percentage"
                onChange={handleInputChange}
                className="h-22 w-22 mt-15"
              />
              <p className="mt-3 m-0 p-0">Percentage</p>
            </div>
            <textarea
              name="buyerIncentive"
              value={formData.buyerIncentive}
              onChange={handleInputChange}
              className="form-control h-200 mt-2"
              placeholder="Conditions e.g: paid on first year's revenue. Tiered percentage based on contract value"
            ></textarea>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4 mb-4">
          <h1 className="heading" style={{ color: "#008080" }}>
            BUYER INCENTIVE
          </h1>
          <textarea
            name="buyerIncentive"
            value={formData.buyerIncentive}
            onChange={handleInputChange}
            className="form-control h-200 mt-2"
            placeholder="Unique offer available to the buyer as a result of this referral."
          ></textarea>
        </div>
      </div>

      {/* Incentive Data Grid */}
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
          {isTreeOpen ? "▼ Incentive Data" : "► Incentive Data"}
        </div>
        {isTreeOpen && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Campaign Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Target Type</th>
                <th>Incentive</th>
                <th>Buyer Incentive</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(incentiveData) && incentiveData.length > 0 ? (
                incentiveData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.campaignName || "-"}</td>
                    <td>{item.startDate || "-"}</td>
                    <td>{item.endDate || "-"}</td>
                    <td>{item.targetType || "-"}</td>
                    <td>{item.incentive || "-"}</td>
                    <td>{item.buyerIncentive || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No data available
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

export default IncentiveSetup;
