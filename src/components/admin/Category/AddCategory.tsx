import React from "react";

type Props = {};

const AddCategory = (props: Props) => {
  return (
    <div>
      <>
        <h3>Categories</h3>
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
            Slug
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Slug"
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

export default AddCategory;
