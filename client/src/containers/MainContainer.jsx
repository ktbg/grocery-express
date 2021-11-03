import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import { getAllCategories } from '../services/categories'
import { getAllProducts } from '../services/products'
import { getAllRatings } from '../services/star-ratings'

import CategoryDetails from '../screens/CategoryDetails'
import ProductDetails from '../screens/ProductDetails'
import Products from '../components/Products'
import Home from '../screens/Home'

const MainContainer = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getAllCategories();
      console.log(categoryList); //DUCHESS
      setCategories(categoryList);
    }
    fetchCategories();
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getAllProducts();
      console.log(productList); //DUCHESS
      setProducts(productList);
    }
    fetchProducts();
  }, [])

  // star rating useEffect to send to the details page
  useEffect(() => {
    const fetchStarRatings = async () => {
      const ratingsList = await getAllRatings();
      console.log(ratingsList); //DUCHESS
      setRatings(ratingsList);
    }
    fetchStarRatings();
  }, [])

  return (
    <Switch>
      <Route path='/categories/:id/'>
        <CategoryDetails products={products} />
      </Route>
      <Route path='/products/:id'>
        <ProductDetails products={products} ratings={ratings} />
      </Route>
      <Route path='/products'>
        <Products products={products} />
      </Route>
      <Route path='/'>
        <Home categories={categories} />
      </Route>
    </Switch>
  )
}

export default MainContainer
