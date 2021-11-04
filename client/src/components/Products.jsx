import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

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
    <>
      {displayProducts.map((product) => (
        <React.Fragment key={product.id}>
          <ProductCard product={product} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Products;
