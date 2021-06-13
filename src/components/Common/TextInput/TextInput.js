import React from "react";

const TextInput = ({
  label,
  type,
  name,
  callBack,
  value,
  withIcon = false,
  error = false,
  errorMessage = "",
}) => {
  const getIcon = (name) => {
    if (name === "email") {
      return <i className="fas fa-envelope fa-color fa-3x"></i>;
    } else if (name === "password") {
      return <i className="fas fa-lock fa-color fa-3x"></i>;
    } else {
      return null;
    }
  };
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <div className={`input-icons ${!withIcon && "mt-0"}`}>
        {withIcon && getIcon(name)}
        <input
          id={name}
          name={name}
          type={type}
          placeholder=" "
          className={`input-class ${!withIcon && "input-padding"}`}
          value={value}
          onChange={(e) => callBack(e)}
        />
      </div>
      {error && errorMessage !== "" && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
