import React from "react";
import background from "../../assets/635407d4-3df0-425f-8691-bf75faae3def.jpg";
import style from "./index.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <img src={background} alt="" />

      <div className={style.buttons}>
        <div className={style.buttonAddAnimal}>
          <button>Зверята</button>
        </div>

        <div className={style.buttonsContainer}>
          <button>Зверята</button>
          <button>О нас</button>
          <button>Контакты</button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Header;
