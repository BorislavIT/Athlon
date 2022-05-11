import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import loginUser from "../../Redux/Actions/Creators/loginUser";
import { selectError } from "../../Redux/Reducers/authReducer";
import "./loginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e: any) => {
    if (e.target.value) {
      setForm({ ...form, email: e.target.value });
    }
  };

  const handlePasswordChange = (e: any) => {
    if (e.target.value) {
      setForm({ ...form, password: e.target.value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      !form.email ||
      form.email === "" ||
      !form.password ||
      form.password === ""
    ) {
      dispatch({
        type: "LOGIN_USER_FAILURE",
        error: "Invalid email or password",
      });
      return;
    }
    dispatch(loginUser(form.email, form.password));
    dispatch({ type: "LOGIN_USER_SUCCESS" });
  };

  return (
    <div className="login-form-container">
      <div className="login-error">{error}</div>
      Email
      <div className="input-field-container">
        <input
          name="email"
          type="email"
          onChange={handleEmailChange}
          className="input-field"
        />
      </div>
      Password
      <div className="input-field-container">
        <input
          name="password"
          type="password"
          className="input-field"
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleSubmit} className="login-button">
        Log In
      </button>
    </div>
  );
};

export default LoginForm;
