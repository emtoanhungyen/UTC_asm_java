import React, { useEffect } from "react";
import ImgVegetable from "./../../images/vegetable.jpg";
import ImgFruit from "./../../images/fruit.jpg";
import ImgRice from "./../../images/rice.jpg";
import ImgCoffee from "./../../images/coffee.jpg";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchCategory } from "../../redux/categories/action";
import { ICategory } from "../../redux/categories/categorySlide";

type Props = {};

const Categories = (props: Props) => {
  const listCategories = useAppSelector((state) => state.category.category);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <div className="container">
      <>
        <h3 className="text-center mt-5">
          <a href="./products">Categories</a>
        </h3>
        <div className="row mt-5">
          {listCategories.map((item: ICategory, index) => (
            <>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="">
                  <div className="view zoom z-depht-2 rounded">
                    <img
                      className="img-fluid rounded shadow"
                      src={
                        "https://res.cloudinary.com/dpu8oqhdq/image/upload/v1732194022/jlnp2vnj5mhg5nwgdnli.webp"
                      }
                      alt="Sample"
                    />
                    <a href="#!" className="text-success">
                      <div className="mask rgba-stylish-slight waves-effect waves-light">
                        <div className="d-flex align-item-end h-100 p-3">
                          <h5 className="text-success mb-0">{item.name}</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    </div>
  );
};

export default Categories;
