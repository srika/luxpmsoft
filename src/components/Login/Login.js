import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//components
import Header from "./Header";
import TextInput from "../Common/TextInput/TextInput";
import Button from "../Common/Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm().formIsValid) {
      const { email, password } = state;
      console.log(email, password);
      if (email === "test@luxpmsoft.com" && password === "Test1234!") {
        localStorage.setItem("isAuthenticated", true);
        history.push("/dashboard");
      }
    }
  };

  const validateForm = (name = "") => {
    let formIsValid = true,
      message = "";
    const { email, password } = state;
    if (name === "email" || name === "") {
      if (email === "") {
        formIsValid = false;
        message = "";
      } else {
        //regular expression for email validation
        let pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(email)) {
          formIsValid = false;
          message = "Please provide the right email format.";
        }
      }
    }

    if (name === "password" || name === "") {
      if (password === "") {
        formIsValid = false;
        message = "";
      } else {
        //regular expression for password validation
        let pattern = new RegExp(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        );
        if (!pattern.test(password)) {
          formIsValid = false;
          message =
            "Password should include at least 8 letters including one uppercase letter, one lowercase letter, one special character, and one number.";
        }
      }
    }

    return { formIsValid, message };
  };

  return (
    <div className="login-container">
      <Header />
      <div className="login-container__form-content">
        <div className="login-container__form-content__input-element">
          <TextInput
            label="Email"
            type="text"
            name="email"
            value={state.email}
            callBack={handleInput}
            withIcon={true}
            error={validateForm("email").formIsValid ? false : true}
            errorMessage={validateForm("email").message}
          />
        </div>
        <div className="login-container__form-content__input-element">
          <TextInput
            label="비밀번호"
            type="password"
            name="password"
            value={state.password}
            callBack={handleInput}
            withIcon={true}
            error={validateForm("password").formIsValid ? false : true}
            errorMessage={validateForm("password").message}
          />
        </div>
        <p className="login-container__form-content__label">비밀번호 찾기</p>
      </div>
      <div className="login-container__button-content">
        <Button title="로그인" callBack={handleSubmit} />
        <p className="login-container__button-content__label">
          계정이 없으신가요?{" "}
          <Link to="/" className="">
            가입하기
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
