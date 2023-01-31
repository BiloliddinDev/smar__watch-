import React from "react";
import { Container } from "../../generels";
import cl from "./home.module.scss";
export const Home = () => {
  return (
    <div className={cl.home}>
      <Container className={cl.home__wrapper}>
        <h1 className={cl.home__title}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className={cl.home__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          perspiciatis eius labore autem at inventore quaerat aut tempore nobis
          neque sapiente ducimus enim eos unde error atque, amet porro
          doloremque.
        </p>
      </Container>
    </div>
  );
};
