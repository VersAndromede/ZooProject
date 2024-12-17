import React from "react";
import background from "../../assets/635407d4-3df0-425f-8691-bf75faae3def.jpg";
import style from "./index.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <img src={background} alt="" />
    </div>
  );
};

export default Header;
