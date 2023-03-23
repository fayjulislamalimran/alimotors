import React from "react";
import About from "../About/About.js";
import Auto from "../Auto/Auto.js";
import Blog from "../Blog/Blog.js";
import Categories from "../Categories/Categories.js";
import Electric from "../Electric/Electric.js";
import Hero from "../Hero/Hero.js";
import Sell from "../Sell/Sell.js";
import Subscribe from "../Subscribe/Subscribe.js";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Sell></Sell>
      <Auto></Auto>
      <Electric></Electric>
      <Blog></Blog>
      <About></About>
      <Subscribe></Subscribe>

    </div>
  );
};

export default Home;
