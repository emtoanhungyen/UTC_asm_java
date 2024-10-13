import React from "react";
import Bestseller from "../components/view/Bestseller";
import Categories from "../components/view/Categories";
import Information from "../components/view/Information";
import NewProduct from "../components/view/NewProduct";
import Slider from "../components/view/Slider";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Slider />
      <Categories />
      <Bestseller />
      <NewProduct />
      <Information />
    </div>
  );
};

export default Home;
