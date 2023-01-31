import React from "react";
import { useParams } from "react-router-dom";
import data from "../producs.json";
import cl from "./main.module.scss";

export const Produ = () => {
  const param = useParams();
  console.log(param.from);

  const cardsDAta = data.filter((data) => data.id == param.from);
  console.log(cardsDAta);
  return (
    <div className={cl.wrapper}>
      <h2 className={cl.wrapper__heading}>{cardsDAta[0].title}</h2>
      <img className={cl.wrapper__img} src={cardsDAta[0].img} alt="" />
      <h2 className={cl.wrapper__price}>{cardsDAta[0].price}</h2>
    </div>
  );
};
