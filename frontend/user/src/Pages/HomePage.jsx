import React from "react";
import Hero from "../Components/HomePage/Hero";
import ExcellenceFramework from "../Components/HomePage/ExcellenceFramework";
import Hotels from "../Components/HomePage/Hotels";
import Article from "../Components/HomePage/Articles";
import Founder from "../Components/HomePage/Founders";
import TransformOperations from "../Components/HomePage/TransformOperations";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ExcellenceFramework />
      <Article />
      <Founder/>
      <Hotels />
      <TransformOperations/>
    </div>
  );
};

export default HomePage;
