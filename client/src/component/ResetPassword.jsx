import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";

function ResetPassword() {
  //const [Reset, setReset] = useState(false);

  //CHECK LOGIN
  // useEffect(() => {
  //   const checkLogin = async () => {
  //     const token = localStorage.getItem("tokenStore");
  //     if (token) {
  //       const verified = await axios.get("/users/verify", {
  //         headers: { Authorization: token },
  //       });

  //       setReset(verified.data);
  //       if (verified.data === false) return localStorage.clear();
  //     } else {
  //       setReset(false);
  //     }
  //   };
  //   checkLogin();
  // }, []);
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
      console.log(res);
      setUser({ email: "" });
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
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
                    id="login-email"
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
                  <a href="/login"></a>
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
