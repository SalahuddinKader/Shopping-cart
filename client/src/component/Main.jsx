import React from "react";
import Header from "./backDash/Nav";
import DashProducts from "./backDash/DashProducts";
import DashProductDetails from "./backDash/DashProductDetails";
// import Home from "./backDash/Home";
import DashContact from "./backDash/DashContact";
import DashCart from "./backDash/DashCart";
import MyAccount from "./backDash/MyAccount";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Main({ setIsLogin }) {
  return (
    <Router>
      <div>
        <Header setIsLogin={setIsLogin} />
        <section>
          {/* <Route path="/login" component={Home} exact /> */}
          <Route path="/login" component={DashProducts} exact />
          <Route path="/login/products/:id" component={DashProductDetails} />
          <Route path="/login/contact" component={DashContact} exact />
          <Route path="/login/dashCart" component={DashCart} exact />
          <Route path="/login/myaccount" component={MyAccount} exact />
        </section>
      </div>
    </Router>
  );
}

export default Main;
