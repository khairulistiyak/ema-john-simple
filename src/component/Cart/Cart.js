import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart)
  let total = 0;
  let shipping = 0;
  let grandTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));

  grandTotal = grandTotal + total + shipping + tax;
  return (
    <div className="Order-container">
      <h4>Order Summary: </h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal.toFixed(0)}</h4>
      <button>Clear Cart</button>
      <br />
      <button>Review Order </button>
    </div>
  );
};

export default Cart;
