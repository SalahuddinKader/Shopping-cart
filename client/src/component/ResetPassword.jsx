import React, { useState } from "react";
import axios from "axios";
import Header from "./header";
import { Link } from "react-router-dom";

function ResetPassword() {
  //Check Login
  const [user, setUser] = useState({
    email: "",
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
      const res = await axios.post("/users/resetpassword", {
        email: user.email,
      });
      // if (!history.location.pathname.startsWith("/login.resetpassword"))
      //   history.push("/login");

      console.log(res);
      setUser({ email: "" });
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
    console.log(err);
  };

  return (
    <div>
      <Header />
      <div className="Reset Password">
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body">
              <div className=" alert-warning alert-dismissible fade show err-btn">
                {err}
              </div>

              <h2 className="text-center mb-3 ">
                <i className="fas fa-lock-open"></i> Reset Password
              </h2>
              <form onSubmit={loginSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    id="reset-email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    required
                    value={user.email}
                    onChange={onChangeInput}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block bg-primary"
                >
                  Reset Password
                  <Link to="/login"></Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
