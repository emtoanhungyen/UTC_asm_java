import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import ButtonBack from "../../ButtonBack";
import { toast } from "react-toastify";
import { ICategory } from "../../../redux/categories/categorySlide";
import { fetchCategory } from "../../../redux/categories/action";
import { addProducts, findProductById } from "../../../redux/products/action";
import axios from "axios";

type Props = {};

interface IFormProducts {
  content: string;
  description: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  status?: boolean;
  categoryId: number;
}

const cloudinaryUploadPreset = "java_shop";
const cloudinaryCloudName = "dpu8oqhdq";

const EditProduct = (props: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormProducts>();
  const Navigation = useNavigate();
  const dispatch = useAppDispatch();
  const listCategories = useAppSelector((state) => state.category.category);
  const productDetail = useAppSelector((state) => state.product.productDetail);

  const { id } = useParams();

  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (id) dispatch(findProductById(Number(id)));
    dispatch(fetchCategory());
  }, [dispatch, id]);

  useEffect(() => {
    if (productDetail) reset(productDetail);
    setImageUrl(productDetail.image);
  }, [productDetail, reset]);

  const onSubmit = handleSubmit((data: IFormProducts) => {
    try {
      dispatch(addProducts({ ...data, image: imageUrl }));
      Navigation(-1);
    } catch (error) {
      console.log(error);
    }
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryUploadPreset);

    try {
      setUploading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
        formData
      );

      const { url, public_id } = response.data;
      setImageUrl(url);
    } catch (error) {
      toast.success("Error uploading file");
      console.error(error);
    } finally {
      setUploading(false);
      toast.success("Upload successful!");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Update Products</h3>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="exampleFormControlInput1"
              placeholder="Name"
              {...register("name", { required: "Required" })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Price
            </label>
            <input
              type="number"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="exampleFormControlInput1"
              placeholder="Price"
              {...register("price", { required: "Required" })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="exampleFormControlInput1"
              placeholder="Quantity"
              min={0}
              {...register("quantity", { required: "Required" })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          <label htmlFor="exampleFormControlInput1" className="form-label">
            Contents
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="exampleFormControlInput1"
            placeholder="Content"
            {...register("content", { required: "Required" })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            {...register("description", { required: "Required" })}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Images
          </label>
          <input
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            type="file"
            id="formFile"
            {...register("image")}
            onChange={handleFileChange}
          />
          <div className="container">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Current"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  marginTop: "8px",
                  display: "flex",
                  justifyContent: "start",
                }}
              />
            )}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            {...register("categoryId", { required: "Required" })}
          >
            {listCategories.map((item: ICategory, index) => (
              <>
                <option selected value={item.id}>
                  {item.name}
                </option>
              </>
            ))}
          </select>
        </div>
        <div>
          <ButtonBack onClick={() => Navigation(-1)} name={"Back"} />
          <button
            type="submit"
            disabled={uploading}
            className="btn btn-success"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
