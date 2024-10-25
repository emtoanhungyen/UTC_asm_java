import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addCategory, fetchCategory } from "../../../redux/categories/action";
import { useAppDispatch } from "../../../store/store";
import { toast } from 'react-toastify';
import ButtonBack from "../../ButtonBack";

type Props = {};

interface FormData {
  name: string;
  slug: string;
  status?: boolean;
}

const AddCategory = (props: Props) => {
  const { handleSubmit, register } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const Navigation = useNavigate();

  const onSubmit = handleSubmit((data: FormData) => {
    dispatch(addCategory(data));
    dispatch(fetchCategory());
    toast.success("Created");
    Navigation(-1);
  });

  return (
    <div>
      <>
        <form onSubmit={onSubmit}>
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
              {...register("name")}
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
              {...register("slug")}
            />
          </div>
          <div className="mb-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                defaultChecked={true}
                {...register("status")}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Status
              </label>
            </div>
          </div>
          <div>
            <ButtonBack onClick={() =>  Navigation(-1)} name={"Back"} />
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </>
    </div>
  );
};

export default AddCategory;
