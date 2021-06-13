import React, { memo } from "react";

const Header = memo((props) => {
  return (
    <div className="login-container__header">
      <h2 className="login-container__header__title">alphametrica</h2>
      <p className="login-container__header__sub-title">로그인</p>
    </div>
  );
});

export default Header;
