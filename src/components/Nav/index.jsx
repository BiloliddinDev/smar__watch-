import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../generels";
import cl from "./nav.module.scss";
import "../../App.css";

export const Nav = () => {
  return (
    <div className={cl.nav}>
      <Container>
        <div className={cl.nav__wrapper}>
          <div className={cl.nav__logo1}>
            <h2 className={cl.nav__logo}>Logo</h2>
          </div>
          <div className={cl.nav__links}>
            <NavLink className={cl.nav__link} to={""}>
              Home
            </NavLink>
            <NavLink className={cl.nav__link} to={"abaut"}>
              Abaut
            </NavLink>
            <NavLink className={cl.nav__link} to={"producs"}>
              Producs
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};
