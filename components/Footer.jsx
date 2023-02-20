import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FooterStyle } from "../styles/HomeStyle";

function Footer() {
  return (
    <FooterStyle>
      <p>2022 Electro Store All rights reserved</p>

      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </FooterStyle>
  );
}

export default Footer;
