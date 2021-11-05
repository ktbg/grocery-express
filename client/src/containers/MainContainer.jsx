import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import { getAllCategories } from '../services/categories'
import { getAllProducts } from '../services/products'
import { getAllRatings } from '../services/star-ratings'

import CategoryDetails from '../screens/CategoryDetails/CategoryDetails'
import ProductDetails from '../screens/ProductDetails/ProductDetails'
import Home from '../screens/Home/Home'

const MainContainer = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getAllCategories();
      setCategories(categoryList);
    }
    fetchCategories();
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getAllProducts();
      setProducts(productList);
    }
    fetchProducts();
  }, [toggle])

  // star rating useEffect to send to the details page
  useEffect(() => {
    const fetchStarRatings = async () => {
      const ratingsList = await getAllRatings();
      setRatings(ratingsList);
    }
    fetchStarRatings();
  }, [])

  return (
    <Switch>
      <Route path='/categories/:id/'>
        <CategoryDetails categories={categories} products={products} />
      </Route>
      <Route path='/products/:id'>
        <ProductDetails products={products} ratings={ratings} setToggle={setToggle}/>
      </Route>
      <Route path='/'>
        <Home categories={categories} />
      </Route>
    </Switch>
  )
}

export default MainContainer
