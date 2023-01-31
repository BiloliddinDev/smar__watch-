import React from "react";
import { Container } from "../../generels";
import cl from "./produc.module.scss";
import data from "../../producs.json";
import { ProCards } from "../../procards/procards";
import { Link } from "react-router-dom";

export const Praducs = () => {
  return (
    <div className={cl.pro}>
      <Container>
        <h1 className={cl.pro__title}>Maxsulorlar</h1>
        <div className={cl.pro__wrapper}>
          {data.map((element) => {
            return (
              <Link to={`${element.id}`}>
                <ProCards img={element.img} title={element.title} />
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
