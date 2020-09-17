import React from "react";
import Header from "../header";
import Header2nd from "../header2nd";
import { Link } from "react-router-dom";
function LoginRegister() {
  return (
    <div>
      <Header />
      <Header2nd />
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body text-center">
            <h1>
              <i className="fab fa-node-js fa-3x"></i>
            </h1>
            <p>Create an account or sign in</p>

            <div>
              <Link to="/Register" className="btn btn-primary btn-block mb-2">
                Join us
              </Link>
            </div>
            <div>
              <a href="/Login" className="btn btn-secondary btn-block">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
