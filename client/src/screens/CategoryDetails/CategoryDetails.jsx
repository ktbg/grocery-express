import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/Products'
import './CategoryDetails.css'

const CategoryDetails = (props) => {
  const [title, setTitle] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categories, products } = props
  const { id } = useParams();

  useEffect(() => {
    const category = categories.find(category => category.id === Number(id));
    setTitle(category);
    setLoading(false);
  }, [categories, id])

  if (loading) <div>Loading...</div>

  return (
    <div>
      <header>
        <h2 className="category-headline">{title?.category}</h2>
        <hr />
      </header>
      <main>
        <Products categoryId={id} products={products} />
      </main>
    </div>
  )
}

export default CategoryDetails
