import Button from "../Button/Button";

const ProductCard = (props) => {
  const { product } = props;

  return (
    <>
      <div className="product-card">
        <div className="product-img-container">
          <img
            className="product-img"
            src={`${product.image}`}
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
        <Button name="details" redirectLocation={`/products/${product.id}`} />
      </div>
    </>
  );
};

export default ProductCard;
