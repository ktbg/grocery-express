import React from "react";

const ProductInfo = (props) => {
  const { product } = props;
  
  return (
    <React.Fragment>
      {/* --------- product information, all users ----------------- */}

      {product.brand ? <div className="brand">{product?.brand}</div> : null}

      {/* --------- all products have a uom, but not size, if size list size uom ---------- */}

      {product.size ? (
        <div className="size">
          {product.size} {product?.uom}
        </div>
      ) : null}

      {/* -------- if no size, list item as price per uom ----------  */}

      {product.size ? (
        <div className="price">{product?.price}</div>
      ) : (
        <div className="price">
          {product?.price} / {product.uom}
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductInfo;
