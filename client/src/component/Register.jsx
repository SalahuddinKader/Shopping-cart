import React, { useState } from "react";
import axios from "axios";
import Header from "./header";
import "./css/register.css";
function Register() {
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
  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/users/register", {
        username: user.name,
        email: user.email,
        password: user.password,
        password2: user.password2,
      });
      setUser({ name: "", email: "", password: "", password2: "" });

      setErr(res.data.msg);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  return (
    <div>
      <Header />
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <div className=" alert-warning alert-dismissible fade show err-btn">
              {err}
            </div>

            <h1 className="text-center mb-3">
              <i className="fas fa-user-plus"></i> Join us
            </h1>
            <form onSubmit={registerSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="name"
                  id="register-name"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                  value={user.name}
                  onChange={onChangeInput}
                  username={user.name}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={onChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  id="register-password"
                  name="password"
                  className="form-control"
                  placeholder=" Create Password"
                  value={user.password}
                  autoComplete="true"
                  onChange={onChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={user.password2}
                  autoComplete="true"
                  onChange={onChangeInput}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block bg-primary"
              >
                Join us
              </button>
            </form>
            <p className="lead mt-4">
              Have An Account? <a href="/login">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
