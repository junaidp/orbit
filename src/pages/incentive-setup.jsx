import React from "react";

const IncentiveSetup = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4">
          <input className="form-control h-40" placeholder="Campaign name" />
          <div className="d-flex gap-4 mt-2">
            <input
              className="form-control h-40 flex-1"
              placeholder="Start date"
              type="date"
            />
            <input
              className="form-control h-40 flex-1"
              placeholder="End date"
              type="date"
            />
          </div>
          <div className="mt-4">
            <h1 className="heading">TARGET</h1>
            <div>
              <div className="d-flex gap-2  item-center">
                <input type="radio" className="h-22 w-22 mt-15" />
                <p className="mt-3 m-0 p-0">General</p>
              </div>
              <div className="d-flex gap-2 item-center">
                <input type="radio" className="h-22 w-22 mt-15" />
                <p className="mt-3 m-0 p-0">Targetted</p>
              </div>
              <div
                className="d-flex flex-column gap-2"
                style={{ paddingLeft: "40px" }}
              >
                <div className="d-flex gap-2 item-center">
                  <input type="checkbox" className="h-22 w-22 mt-15" />
                  <p className="mt-3 p-0 m-0">Company</p>
                </div>
                <div className="d-flex gap-2 item-center">
                  <input type="checkbox" className="h-22 w-22 mt-15" />
                  <p className="mt-3 m-0 p-0">Person</p>
                </div>
                <div className="d-flex gap-2 item-center">
                  <input type="checkbox" className="h-22 w-22 mt-15" />
                  <p className="mt-3 m-0 p-0">Sector/industry</p>
                </div>
                <div>
                  <input
                    className="form-control h-40 flex-1"
                    placeholder="Name"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h1 className="heading">INCENTIVE</h1>
          <div>
            <div className="d-flex gap-2  item-center">
              <input type="radio" className="h-22 w-22 mt-15" />
              <p className="mt-3 p-0 m-0">Fixed fee</p>
            </div>
            <div className="d-flex gap-2 mb-2 item-center">
              <input type="radio" className="h-22 w-22 mt-15" />
              <p className="mt-3 m-0 p-0">Percentage</p>
            </div>
            <div>
              <input
                className="form-control h-40"
                placeholder="Amount £ or %"
              />
            </div>
            <div>
              <textarea
                className="form-control h-200 mt-2"
                placeholder="Conditions e.g: paid on first year's revenue. Tiered percentage based on contract value"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h1 className="heading">BUYER INCENTIVE</h1>
          <div>
            <textarea
              className="form-control h-200 mt-2"
              placeholder="Unique offer available to the buyer as a result  of this referral E.g: 10% discount on the first 6 months. Or additional services provided at no cost"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncentiveSetup;
