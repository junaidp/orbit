import React from 'react';

const ReferralForm = () => {
  const formStyle = {
    padding: '20px',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const fieldStyle = {
    flex: 1,
    marginRight: '20px',
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

  return (
    <div style={formStyle}>
     
      <div style={sectionStyle}>
        {/* Opportunity Section */}
        <div style={fieldStyle}>
          <h3>Opportunity</h3>
          <div>
            <label style={labelStyle}>    </label>
            <input className="form-control h-40" placeholder="Company name" />
            
          </div>
          <div>
            <label style={labelStyle}></label>
            
            <input className="form-control h-40" placeholder="Sector" />
          </div>
          <div>
            <label style={labelStyle}></label>
            
            <textarea
            placeholder="Opportunity details"
            className="form-control h-200"
          ></textarea>
          </div>
          <div>
            <label style={labelStyle}></label>
            
            <input className="form-control h-40" placeholder="Possible value" />
          </div>
        </div>

        {/* Contact's Details Section */}
        <div style={fieldStyle}>
          <h3>Contact's Details</h3>
          <p style={{ fontSize: '12px', color: 'gray' }}>
            These won't be shared with Nexer until they accept the referral,so that they can't contact them before speaking to you
          </p>
          <div>
            <label style={labelStyle}></label>
           
            <input className="form-control h-40" placeholder="Contact's name" />
          </div>
          <div>
            <label style={labelStyle}></label>
            <input className="form-control h-40" placeholder="Contact's Position" />
          </div>
          <div>
            <label style={labelStyle}></label>
            <input className="form-control h-40" placeholder="Contact's Email" />
          </div>
          <div>
            <label style={labelStyle}></label>
            <input className="form-control h-40" placeholder="Contact's Phone" />
          </div>
        </div>

        {/* Payment Section */}
        <div style={fieldStyle}>
          <h3>Payment</h3>
          <div>
            <label style={labelStyle}></label>
           
            <input className="form-control h-40" placeholder="Account Name" />
          </div>
          <div>
            <label style={labelStyle}></label>
           
            <input className="form-control h-40" placeholder="Sort Code" />
          </div>
          <div>
            <label style={labelStyle}></label>
          
            <input className="form-control h-40" placeholder="Account Number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm;
