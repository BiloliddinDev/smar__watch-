import React from "react";
import clas from "./cards.module.scss";

export const Cards = (props) => {
  return (
    <div className={clas.cards}>
      <h3 className={clas.cards__title}>{props.title}</h3>
      <p className={clas.cards__text}>{props.text}</p>
      <img src={props.img} width="100" />
    </div>
  );
};
