import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../../routers/path";

type Props = {};

const TableProducts = (props: Props) => {
  return (
    <div>
      <h3>Products</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">
              <Link to={PATH.ADD_PRODUCTS}>
                <button type="button" className="btn btn-success">
                  Create
                </button>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button type="button" className="btn btn-primary mr-2">
                Update
              </button>
              <button type="button" className="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <button type="button" className="btn btn-primary mr-2">
                Update
              </button>
              <button type="button" className="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <button type="button" className="btn btn-primary mr-2">
                Update
              </button>
              <button type="button" className="btn btn-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
