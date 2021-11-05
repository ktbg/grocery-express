import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { getAllCategories } from "../services/categories";
import { getAllProducts } from "../services/products";
import {
  deleteRating,
  getAllRatings,
  postRating,
  putRating,
} from "../services/star-ratings";

import CategoryDetails from "../screens/CategoryDetails/CategoryDetails";
import ProductDetails from "../screens/ProductDetails/ProductDetails";
import Home from "../screens/Home/Home";

const MainContainer = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getAllCategories();
      setCategories(categoryList);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getAllProducts();
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  // star rating useEffect to send to the details page
  useEffect(() => {
    const fetchStarRatings = async () => {
      const ratingsList = await getAllRatings();
      setRatings(ratingsList);
    };
    fetchStarRatings();
  }, []);

  const handleRatingCreate = async (id, formData) => {
    const newRating = await postRating(id, formData);
    setRatings((prevState) => [...prevState, newRating]);
  };

  const handleRatingUpdate = async (id, formData) => {
    const newRating = await putRating(id, formData);
    setRatings((prevState) =>
      prevState.map((rating) => {
        return rating.id === Number(id) ? newRating : rating;
      })
    );
  };

  const handleRatingDelete = async (id) => {
    await deleteRating(id);
    setRatings((prevState) => prevState.filter((rating) => rating.id !== id));
  };

  return (
    <Switch>
      <Route path="/categories/:id/">
        <CategoryDetails categories={categories} products={products} />
      </Route>
      <Route path="/products/:id">
        <ProductDetails
          product={product}
          setProduct={setProduct}
          products={products}
          ratings={ratings}
          setRatings={setRatings}
          handleRatingCreate={handleRatingCreate}
          handleRatingUpdate={handleRatingUpdate}
          handleRatingDelete={handleRatingDelete}
        />
      </Route>
      <Route path="/">
        <Home categories={categories} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
