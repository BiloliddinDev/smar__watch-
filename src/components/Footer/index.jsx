import React from "react";
import { Container } from "../generels";
import cl from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={cl.footer}>
      <Container className={cl.footer__box}>
        <div className={cl.footer__wrapper}>
          <h2 className={cl.footer__logo}>Logo</h2>
          <p className={cl.footer__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            eum officiis fugiat ullam, facilis veniam similique ipsum facere
            suscipit quos praesentium laborum doloribus inventore ratione?
            Deserunt distinctio optio sequi modi.
          </p>
        </div>
        <div className={cl.footer__links}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt=""
            width={50}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
            alt=""
            width={50}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
            alt=""
            width={50}
          />
        </div>
      </Container>
      <p className={cl.footer__title}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
  );
};
