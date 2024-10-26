import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts, removeProduct } from "../../../redux/products/action";
import { IProduct } from "../../../redux/products/productSlide";
import { PATH } from "../../../routers/path";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Confirm from "../../Confirm";

type Props = {};

const TableProducts = (props: Props) => {
  const dispatch = useAppDispatch();
  const listProducts = useAppSelector((state) => state.product.products);

  const [showModal, setShowModal] = useState(false);
  const [idRemove, setIdRemove] = useState<number>();

  const handleClose = () => setShowModal(false);
  const handleShow = (id?: number) => {
    setIdRemove(id);
    return setShowModal(true);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRemove = (id?: number) => {
    console.log("id", id);
    setShowModal(false);
    if (id) dispatch(removeProduct(id));
  };

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
              <td>
                <img
                  src={item.image}
                  alt="image"
                  style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }} 
                />
              </td>
              <td>
                <button type="button" className="btn btn-primary mr-2">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleShow(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Confirm
        show={showModal}
        body={"Bạn có chắc chắn muốn xóa?"}
        title={"Xóa product"}
        handleClose={handleClose}
        handleConfirm={() => handleRemove(idRemove)}
      />
    </div>
  );
};

export default TableProducts;
