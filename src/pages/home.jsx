import React from "react";
import TextField from "@mui/material/TextField";

const Home = () => {
  return (
    <div>
      <h1 className="heading mb-4">Company Setup</h1>
      <div className="row gap-2">
        <div className="form-group col-lg-5">
          <label htmlFor="area">Company Name:</label>
          <TextField
            id="designation"
            name="designation"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group col-lg-5">
          <label htmlFor="area">Linkedln URL:</label>
          <TextField
            id="designation"
            name="designation"
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4 gap-2">
        <div className="form-group col-lg-5">
          <label htmlFor="area">Name:</label>
          <TextField
            id="designation"
            name="designation"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group col-lg-5">
          <label htmlFor="area">Email:</label>
          <TextField
            id="designation"
            name="designation"
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4 gap-2">
        <div className="form-group col-lg-5">
          <label htmlFor="area">Phone:</label>
          <TextField
            id="designation"
            name="designation"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group col-lg-5">
          <label htmlFor="area">Linkedln Profile URL:</label>
          <TextField
            id="designation"
            name="designation"
            type="text"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="form-group col-lg-10">
          <label htmlFor="area">Introductory Aggrement:</label>
          <textarea className="form-control h-200"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
