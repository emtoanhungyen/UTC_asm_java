import React from "react";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <div>
      <>
        <h3>Products</h3>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Contents
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Content"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Images
          </label>
          <input className="form-control" type="file" id="formFile" />
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
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Quantity"
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
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Category_id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Em để tạm ô này thôi nhé"
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

export default AddProduct;
