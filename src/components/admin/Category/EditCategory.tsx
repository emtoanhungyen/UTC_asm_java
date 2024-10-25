import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  findCategoryById,
  updateCategory,
} from "../../../redux/categories/action";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { toast } from "react-toastify";
import ButtonBack from "../../ButtonBack";

type Props = {};
interface FormData {
  name: string;
  slug: string;
  status?: boolean;
}
const EditCategory = (props: Props) => {
  const categoryDetail = useAppSelector(
    (state) => state.category.categoryDetail
  );

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const Navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(findCategoryById(Number(id)));
  }, [id, dispatch]);

  useEffect(() => {
    if (categoryDetail) reset(categoryDetail);
  }, [categoryDetail, reset]);

  const onSubmit = handleSubmit((data: FormData) => {
    console.log("submit", data);
    dispatch(updateCategory(data));
    toast.success("Created");
    Navigation(-1);
  });

  return (
    <div>
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
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="exampleFormControlInput1"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Slug
              </label>
              <input
                type="text"
                className={`form-control ${errors.slug ? "is-invalid" : ""}`}
                id="exampleFormControlInput1"
                placeholder="Slug"
                {...register("slug", { required: "Slug is required" })}
              />
            </div>
            {errors.slug && (
              <div className="invalid-feedback">{errors.slug.message}</div>
            )}
            <div>
              <ButtonBack onClick={() => Navigation(-1)} name={"Back"} />
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
        </>
      </div>
    </div>
  );
};

export default EditCategory;
