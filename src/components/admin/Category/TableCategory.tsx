import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  fetchCategory,
  removeCategory,
} from "../../../redux/categories/action";
import { ICategory } from "../../../redux/categories/categorySlide";
import { PATH } from "../../../routers/path";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { Modal, Button } from "react-bootstrap";

type Props = {};

const TableCategory = (props: Props) => {
  const listCategories = useAppSelector((state) => state.category.category);
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(false);
  const [idRemove, setIdRemove] = useState<number>();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleClose = () => setShowModal(false);
  const handleShow = (id?: number) => {
    setIdRemove(id);
    return setShowModal(true);
  };

  const handleRemove = (id?: number) => {
    console.log("id", id);
    setShowModal(false);
    if (id !== undefined) {
      dispatch(removeCategory(id));
    }
  };

  return (
    <div>
      <h3>Category</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">
              <Link to={PATH.ADD_CATEGORY}>
                <button type="button" className="btn btn-success">
                  Create
                </button>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {listCategories.map((item: ICategory, index) => (
            <>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>
                  <NavLink to={`${PATH.UPDATE_CATEGORY}/${item.id}`}>
                    <button type="button" className="btn btn-primary mr-2">
                      Update
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleShow(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <>
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Xóa category</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc chắn muốn xóa?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button
              type="submit"
              variant="danger"
              onClick={() => handleRemove(idRemove)}
            >
              Xác nhận
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default TableCategory;
