import React from "react";

const Button = ({ title, disable = false, callBack }) => {
  return (
    <div
      className={`button-container ${disable ? "btn-disabled" : "btn-active"}`}
      onClick={callBack}
    >
      <p
        className={`button-container__title ${
          disable ? "btn-disabled" : "btn-active-label"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default Button;
