/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { Main, Banner, Desc } from "../styles/HeroStyle";

function HeroBanner({ heroBanner }) {
  return (
    <Main>
      <div>
        <p className="small">{heroBanner.smallText}</p>

        <h1>{heroBanner.midText}</h1>

        <img
          src={urlFor(heroBanner.image.asset._ref)}
          alt="headphones"
          className="img"
        />

        <Banner>
          <Link href={`product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>

          <Desc>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </Desc>
        </Banner>
      </div>
    </Main>
  );
}

export default HeroBanner;
