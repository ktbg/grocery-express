import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import './ProductCard/ProductCard.css'

const Products = (props) => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const { products, categoryId } = props;

  useEffect(() => {
    const filterProducts = products.filter(
      (product) => product.category_id === Number(categoryId)
    );
    setDisplayProducts(filterProducts);
  }, [categoryId, products]);

  return (
    <div className="product-card-container">
      {displayProducts.map((product) => (
        <React.Fragment key={product.id}>
          <ProductCard product={product} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Products;
