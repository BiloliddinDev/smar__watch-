import React from "react";
import { Cards } from "../../cards/cards";
import { Container } from "../../generels";
import cs from "./abaut.module.scss";

export const Abaut = () => {
  return (
    <div className={cs.abaut}>
      <Container>
        <h2 className={cs.abaut__heading}>Title</h2>
        <p className={cs.abaut__text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita rem
          vel explicabo magnam officiis similique necessitatibus omnis ipsum
          deleniti non! Quod, incidunt? Obcaecati illo soluta, rem laborum neque
          asperiores eveniet.
        </p>
        <div className={cs.abaut__wrapper}>
          <Cards
            title={"Biz haqmzda"}
            text={"1000 xildagi maxsulotlar"}
            img={
              "https://www.pngmart.com/files/17/Shopping-Paper-Bag-PNG-Transparent-Image.png"
            }
          />
          <Cards
            title={"Ishonch"}
            text={"Xar qanday joyga yetkazib berish"}
            img={
              "https://www.pngmart.com/files/21/Food-Delivery-Scooter-PNG-Image.png"
            }
          />
          <Cards
            title={"Biz bilan boglanish"}
            text={" 24 soat aloqa "}
            img={
              "https://parspng.com/wp-content/uploads/2022/03/telephonepng.parspng.com-2-600x643.png"
            }
          />
        </div>
      </Container>
    </div>
  );
};
