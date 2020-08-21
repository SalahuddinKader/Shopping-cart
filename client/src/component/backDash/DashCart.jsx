import React, { useContext, useEffect } from "react";
import { DataContext } from "../context";
import { Link } from "react-router-dom";
import Colors from "../section/colors";
import "../css/Details.css";
import "../css/Cart.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StripeCheckout from "react-stripe-checkout";
toast.configure();

const DashCart = () => {
  const {
    products,
    cart,
    handleIncrement,
    handleDecrement,
    handleRemove,
    total,
    handleTotal,
    removeAll,
  } = useContext(DataContext);

  const handleToken = (token) => {
    const body = {
      token,
      products,
      total,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        toast(" Success! Check email for details", { type: "success" });

        removeAll();

        console.log(response);
      })
      .catch(() => {
        toast("Something went wrong", { type: "error" });
      });
  };

  //Pay With Card HandleToken

  //Added to Total in the cart
  useEffect(() => {
    handleTotal();
  }, []);

  //Without product showing empty cart
  if (cart.length === 0) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Your Cart is Currently Empty</h2>{" "}
      </div>
    );
  } else {
    return (
      <div>
        {cart.map((item) => (
          <div className="details cart" key={item._id}>
            <img className="cart-img" src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>£{item.price * item.count}</span>
              </div>

              <Colors colors={item} />

              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="amount">
                <button
                  className="count"
                  onClick={() => handleDecrement(item._id)}
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  className="count"
                  onClick={() => handleIncrement(item._id)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="delete" onClick={() => handleRemove(item._id)}>
              Remove
            </div>
          </div>
        ))}
        <div className="total-checkout">
          <h3>Total: £{total}</h3>
        </div>

        <div className="total">
          <div className="total">
            <Link to="/products" style={{ background: "crimson" }}>
              Continue Shopping
            </Link>
          </div>
          <StripeCheckout
            stripeKey="pk_test_51HAlmnIfOyLdLwzAz2piAWlcCJcAPATSEkCyxcUG7m1F80xXqr4wd8FoFWqYEfXUUEEgDGBx5G9aXG4IenAw46fh00x1Qgnr7v"
            token={handleToken}
            name="NIKE"
            billingAddress
            shippingAddress
          >
            <button className="btn btn-primary btn-lg">Checkout</button>
          </StripeCheckout>
        </div>
      </div>
    );
  }
};

export default DashCart;
