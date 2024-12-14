import React from "react";

const ReferralForm = () => {
  return (
    <div>
      <div className="row">
        {/* Opportunity Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Opportunity</h3>
          <div>
            <input className="form-control h-40" placeholder="Company name" />
          </div>
          <div>
            <input className="form-control h-40" placeholder="Sector" />
          </div>
          <div>
            <textarea
              placeholder="Opportunity details"
              className="form-control h-200"
            ></textarea>
          </div>
          <div>
            <input className="form-control h-40" placeholder="Possible value" />
          </div>
        </div>

        {/* Contact's Details Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Contact's Details</h3>
          <p style={{ fontSize: "12px", color: "gray" }}>
            These won't be shared with Nexer until they accept the referral,so
            that they can't contact them before speaking to you
          </p>
          <div>
            <input className="form-control h-40" placeholder="Contact's name" />
          </div>
          <div>
            <input
              className="form-control h-40"
              placeholder="Contact's Position"
            />
          </div>
          <div>
            <input
              className="form-control h-40"
              placeholder="Contact's Email"
            />
          </div>
          <div>
            <label></label>
            <input
              className="form-control h-40"
              placeholder="Contact's Phone"
            />
          </div>
        </div>

        {/* Payment Section */}
        <div className="col-lg-4 d-flex flex-column gap-2 mb-4">
          <h3 className="heading">Payment</h3>
          <div>
            <input className="form-control h-40" placeholder="Account Name" />
          </div>
          <div>
            <input className="form-control h-40" placeholder="Sort Code" />
          </div>
          <div>
            <input className="form-control h-40" placeholder="Account Number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm;
