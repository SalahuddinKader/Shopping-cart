import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import Header2nd from "./header2nd";

import { Link } from "react-router-dom";
import Main from "./Main";

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  //CHECK LOGIN
  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const verified = await axios.get("/users/verify", {
          headers: { Authorization: token },
        });

        setIsLogin(verified.data);
        if (verified.data === false) return localStorage.clear();
      } else {
        setIsLogin(false);
      }
    };
    checkLogin();
  }, []);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [err, setErr] = useState(" ");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/users/login", {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ email: "", password: "" });
      setUser(user);

      localStorage.setItem("tokenStore", res.data.token);
      setIsLogin(true);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  return (
    <div>
      {isLogin ? (
        <Main setIsLogin={setIsLogin} />
      ) : (
        <div>
          <Header />
          <Header2nd />
          <div className="login">
            <div className="row mt-5">
              <div className="col-md-6 m-auto">
                <div className="card card-body">
                  <div className=" alert-warning alert-dismissible fade show err-btn">
                    {err}
                  </div>
                  <h1 className="text-center mb-3 ">
                    <i className="fas fa-sign-in-alt"></i> Sign in
                  </h1>
                  <form onSubmit={loginSubmit}>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        id="login-email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        required
                        value={user.email}
                        onChange={onChangeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        id="login-password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        required
                        value={user.password}
                        autoComplete="true"
                        onChange={onChangeInput}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block bg-primary"
                    >
                      Sign in
                    </button>
                  </form>
                  <p className="lead mt-4">
                    No Account? <a href="/register">Join us</a>
                  </p>
                  <div>
                    <p className="lead mt-4">
                      <Link to="/resetpassword">Forget Password </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
