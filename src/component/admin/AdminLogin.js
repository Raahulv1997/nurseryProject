import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminLoginData } from "../api/api";
import useValidation from "../common/useValidation";
import Logo from "../css-js/images/logo.png";
const AdminLogin = () => {
  let path = window.location.pathname;
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const initialFormState = {
    email: "",
    password: "",
  };

  // validation fucntion------
  const validators = {
    email: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Email address is required"
          : !/^\S+@\S+\.\S+$/.test(value)
          ? "Invalid email address"
          : null,
    ],
    password: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Password is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
  };
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  const OnLoginClick = async (e) => {
    e.preventDefault();

    if (validate()) {
      const response = await AdminLoginData(state.email, state.password);
      // console.log("resultt--" + JSON.stringify(response));
      localStorage.removeItem("vendor_token");
      if (response === "password not matched") {
        setErrMsg("staus is false");
      } else if (response === "email not found") {
        setErrMsg("email not found");
      } else if (response[1].true === true) {
        localStorage.setItem("admin_token", response[1].token);
        navigate("/admin/home");
      }
    }
  };

  return (
    <div>
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
              <div className="user-form-logo">
                <Link to="index.html">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>welcome Admin !</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div className="user-form-group">
                  <ul className="user-form-social">
                    <li>
                      <Link to="#" className="facebook">
                        <i className="fab fa-facebook-f"></i>login with facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter">
                        <i className="fab fa-twitter"></i>login with twitter
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="google">
                        <i className="fab fa-google"></i>login with google
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="instagram">
                        <i className="fab fa-instagram"></i>login with instagram
                      </Link>
                    </li>
                  </ul>
                  <div className="user-form-divider">
                    <p>or</p>
                  </div>
                  <form className="user-form">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control user_input_class"
                        value={state.email}
                        name="email"
                        placeholder="Enter your email"
                        onChange={onInputChange}
                      />
                      {errors.email
                        ? (errors.email || []).map((error) => {
                            return (
                              <small className="text-danger">{error}</small>
                            );
                          })
                        : null}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control user_input_class"
                        placeholder="Enter your password"
                        name="password"
                        value={state.password}
                        onChange={onInputChange}
                      />
                      {errors.password
                        ? (errors.password || []).map((error) => {
                            return (
                              <small className="text-danger">{error}</small>
                            );
                          })
                        : null}
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="check"
                      />
                      <label className="form-check-label" for="check">
                        Remember Me
                      </label>
                    </div>
                    {errMsg === "staus is false" ? (
                      <small className="text-danger">
                        credentials Not Matches
                      </small>
                    ) : null}

                    {errMsg === "email not found" ? (
                      <small className="text-danger">Email not found</small>
                    ) : null}

                    <div className="form-button">
                      <button onClick={OnLoginClick}>login</button>

                      <p>
                        Forgot your password?
                        <Link to={""}>reset here</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="user-form-remind">
                <p>
                  Don't have any account?
                  <Link to={"/"}>register here</Link>
                </p>
              </div>
              <div className="user-form-footer">
                <p>
                  Greeny | &COPY; Copyright by <Link to="#">Mironcoder</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
