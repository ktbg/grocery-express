

const ProductDetailsButton = (props) => {
  const { buttonName, setActive } = props

  const handleClick = (e) => {
    e.preventDefault();
    setActive(true);
  }
  return (
    <button className="product-details-btn" onClick={handleClick}>
      {buttonName}
    </button>
  )
}

export default ProductDetailsButton
