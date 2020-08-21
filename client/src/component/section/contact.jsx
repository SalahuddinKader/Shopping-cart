import React, { useState } from "react";
import axios from "axios";
import Header from "../header";
import "../css/Contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
    mobile: "",
    sent: false,
    buttonText: "Send Message",
  });
  const [err, setErr] = useState(" ");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };
  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/forma", {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        mobile: user.mobile,
        message: user.message,
      });
      setUser({ sent: true });

      setUser({ name: "", email: "", lastname: "", mobile: "", message: "" });

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
            <div className=" alert-success alert-dismissible fade show err-btn">
              {err}
            </div>

            <h1 className="text-center mb-3">
              <i className="fas fa-blender-phone"></i> Contact
            </h1>
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label>Firstname</label>
                <input
                  type="text"
                  id="contact-firstname"
                  name="name"
                  className="form-control"
                  placeholder="Firstname"
                  value={user.name}
                  onChange={onChangeInput}
                  username={user.name}
                  required
                />
              </div>
              <div className="form-group">
                <label>lastname</label>
                <input
                  type="text"
                  id="contact-lastname"
                  name="lastname"
                  className="form-control"
                  placeholder="Lastname"
                  value={user.lastname}
                  onChange={onChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={user.email}
                  onChange={onChangeInput}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  id="contact-phone"
                  name="mobile"
                  className="form-control"
                  placeholder="Phone"
                  value={user.mobile}
                  onChange={onChangeInput}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="pl-1"
                  name="message"
                  value={user.message}
                  id=""
                  cols="95"
                  rows="5"
                  placeholder="Message..."
                  onChange={onChangeInput}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block bg-primary btn-button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
