import React, { useContext, useEffect } from "react";
import { DataContext } from "../context";
import { Link } from "react-router-dom";
import Colors from "../section/colors";
import "../css/Details.css";
import "../css/Cart.css";
import { toast } from "react-toastify";
import Header from "../header";
import Header2nd from "../header2nd";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import StripeCheckout from "react-stripe-checkout";
toast.configure();

const Cart = () => {
  const {
    cart,
    handleIncrement,
    handleDecrement,
    handleRemove,
    total,
    handleTotal,
    removeAll,
  } = useContext(DataContext);
  const handleToken = async (token) => {
    return await axios
      .post("/api/payment", {
        token,
        total,
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

  // const handleToken = async (token) => {
  //   const res = await axios.post("/api/payment", {
  //     token,
  //     total,
  //   });
  //   try {
  //     toast(" Success! Check email for details", { type: "success" });
  //     console.log(res);
  //     removeAll();
  //   } catch (err) {
  //     toast("Something went wrong", { type: "error" });
  //     console.log(err);
  //   }
  // };

  //Pay With Card HandleToken

  //Added to Total in the cart
  useEffect(() => {
    handleTotal();
  });

  //Without product showing empty cart
  if (cart.length === 0) {
    return (
      <div>
        <h4 className="no-items" style={{ textAlign: "center" }}>
          There are no items in the bag.
        </h4>
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
                {/* <div className="delete" onClick={() => handleRemove(item._id)}>
                  X
                </div> */}
              </div>
            </div>

            <div className="delete" onClick={() => handleRemove(item._id)}>
              X
            </div>
          </div>
        ))}
        <div className="total-checkout">
          <h3>Total: £{total}</h3>
        </div>

        <div className="total">
          <div className="total">
            <Link to="/login" style={{ background: "crimson" }}>
              Continue Shopping
            </Link>
          </div>
          <StripeCheckout
            stripeKey="pk_test_51HAlmnIfOyLdLwzAz2piAWlcCJcAPATSEkCyxcUG7m1F80xXqr4wd8FoFWqYEfXUUEEgDGBx5G9aXG4IenAw46fh00x1Qgnr7v"
            token={handleToken}
            amount={total * 100}
            currency="GBP"
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

export default Cart;
