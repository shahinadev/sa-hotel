import React from "react";
import useFirebase from "../../../hooks/useFirebase";
import { useLocation, useHistory } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const { GoogleSigIn } = useFirebase();
  const redirect = location.state?.from || "/";
  return (
    <div className="my-login">
      <h2 className="text-center my-5 fw-normal">Please login to get start</h2>
      <button
        className="btn login-btn w-25 mx-auto d-block fw-normal"
        onClick={() =>
          GoogleSigIn().then((res) => {
            history.push(redirect);
          })
        }
      >
        Continue with
        <img
          className="google-logo"
          src="https://img.icons8.com/color/30/000000/google-logo.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default Login;
