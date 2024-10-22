import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategory } from "../../../redux/categories/action";
import { ICategory } from "../../../redux/categories/categorySlide";
import { PATH } from "../../../routers/path";
import { useAppDispatch, useAppSelector } from "../../../store/store";

type Props = {};

const TableCategory = (props: Props) => {
  const listCategories = useAppSelector((state) => state.category.category);
  console.log("a", listCategories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

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
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
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

export default TableCategory;
