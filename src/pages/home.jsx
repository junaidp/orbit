import React from "react";

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <h1 className="heading">Inclusions</h1>
          <p>
            Add these people to the referral list in addition to the ones pulled
            from linkedin
          </p>
          <textarea
            placeholder="write/paste list here"
            className="form-control h-200"
          ></textarea>
        </div>
        <div className="col-lg-9">
          <div className="col-lg-12">
            <h1 className="heading">
              Exclusions : do not include these people and companies as
              referrals or targets
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <p>People and role type</p>
              <textarea
                placeholder="write/paste list here"
                className="form-control h-200 mt-65"
              ></textarea>
            </div>
            <div className="col-lg-4">
              <p>Competitors</p>
              <textarea
                placeholder="write/paste list here"
                className="form-control h-200  mt-65"
              ></textarea>
            </div>
            <div className="col-lg-4">
              <p>Existing clients</p>
              <textarea
                placeholder="write/paste list here"
                className="form-control h-200  mt-65"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mb-4">
        <div className="col-lg-4 d-flex flex-column gap-2 mt-2">
          <h1 className="heading">Client testimonials</h1>
          <input className="form-control h-40" placeholder="Name" />
          <input className="form-control h-40" placeholder="Company" />
          <input className="form-control h-40" placeholder="Position" />
          <input className="form-control h-40" placeholder="Logo Upload" />
          <textarea
            placeholder="Testimonial"
            className="form-control h-200"
          ></textarea>
          <button className="btn btn-secondary">Add Another</button>
        </div>
        <div className="col-lg-4 d-flex flex-column gap-2 mt-2">
          <h1 className="heading">Referral payment history</h1>
          <input
            className="form-control h-40"
            placeholder="Number of successfull referrals"
          />
          <input
            className="form-control h-40"
            placeholder="Average incentive paid"
          />
        </div>
        <div className="col-lg-4 d-flex flex-column gap-2 mt-2">
          <h1 className="heading">How it works</h1>

          <textarea
            placeholder="Description of the companies sales processonce the referral has been made"
            className="form-control h-200"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
