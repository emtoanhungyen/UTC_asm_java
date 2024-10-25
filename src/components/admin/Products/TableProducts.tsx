import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../../redux/products/action";
import { IProduct } from "../../../redux/products/productSlide";
import { PATH } from "../../../routers/path";
import { useAppDispatch, useAppSelector } from "../../../store/store";

type Props = {};

const TableProducts = (props: Props) => {
  const dispatch = useAppDispatch();
  const listProducts = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h3>Products</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Content</th>
            <th scope="col">Image</th>
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
          {listProducts.map((item: IProduct, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.content}</td>
              <td>{item.image}</td>
              <td>
                <button type="button" className="btn btn-primary mr-2">
                  Update
                </button>
                <button type="button" className="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
