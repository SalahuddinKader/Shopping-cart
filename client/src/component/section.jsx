import React from "react";
import Details from "./section/details";
import Products from "./section/products";
import { Route } from "react-router-dom";
import Cart from "./section/cart";
import Home from "./section/Home";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import LoginRegister from "./section/LoginRegister";
import Login from "./Login";
import About from "./section/About";
import Contact from "./section/contact";
const Section = () => {
  return (
    <section>
      <Route path="/" component={Home} exact />
      <Route path="/product" component={Products} exact />
      <Route path="/product/:id" component={Details} />
      <Route path="/cart/" component={Cart} />
      <Route path="/loginRegister" component={LoginRegister} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/resetpassword" component={ResetPassword} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </section>
  );
};

export default Section;
