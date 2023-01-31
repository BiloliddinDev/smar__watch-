import React from "react";
import cl from "./producs.module.scss";

export const ProCards = (props) => {
  return (
    <div className={cl.cards}>
      <img className={cl.cards__img} src={props.img} />
      <h2 className={cl.cards__title}>{props.title}</h2>
    </div>
  );
};
