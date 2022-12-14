import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { handleAddToCart, product } = props;

  const { name, price, seller, ratings, stock, img } = props.product;

  return (
    <div>
      <div className="product-container">
        <div className="product-title">
          <div className="product-img">
            <img src={img} alt="" />
          </div>
          <div>
            <h3>{name}</h3>
            <h4 className="price">Price: $ {price}</h4>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <p>Stock: {stock}</p>
          </div>
        </div>
      </div>
      <button className="btn-cart" onClick={() => handleAddToCart(product)}>
        <p className="btn-text"> Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
