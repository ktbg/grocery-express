import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { getAllCategories } from '../services/categories'
import { getAllProducts } from '../services/products'



const MainContainer = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const history = useHistory();

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

  return (
    <Switch>
      <Route path='/categories/:id/'>
        <div>render all products for a given category</div>
      </Route>
      <Route path='/products/:id'>
        product details screen
      </Route>
      <Route path='/products'>
        products component
      </Route>
      <Route path='/'>
        Home screen here
      </Route>
    </Switch>
  )
}

export default MainContainer
