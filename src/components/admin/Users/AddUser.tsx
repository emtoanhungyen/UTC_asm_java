import React from "react";

type Props = {};

const AddUser = (props: Props) => {
  return (
    <div>
      <>
        <h3>Users</h3>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Status"
          />
        </div>

        <div>
          <button type="button" className="btn btn-primary mr-2">
            Back
          </button>
          <button type="button" className="btn btn-success">
            Save
          </button>
        </div>
      </>
    </div>
  );
};

export default AddUser;
