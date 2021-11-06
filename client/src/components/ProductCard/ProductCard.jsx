import Button from "../Button/Button";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { product } = props;

  return (
    <>
      <div className="product-card">
        <div className="product-img-container">
          <img
            className="product-img"
            src={
              require(`../../assets/images/products/${product.image}`).default
            }
            alt={product.name}
          />
        </div>
        <div className="product-info-container">
          <div className="product-info">
            <p className="card-name">{product.name}</p>
            {product.size ? (
              <p className="card-price">{product.price} </p>
            ) : (
              <p className="card-price">
                {product.price} / {product.uom}
              </p>
            )}
          </div>
          <div>
            <Button
              className="details-btn"
              name="details"
              redirectLocation={`/products/${product.id}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
