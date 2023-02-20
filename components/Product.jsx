/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { Main } from "../styles/ProductStyle";

function Product({ product }) {
  //Extract the fields from the props
  const { image, name, slug, price } = product;
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <Main>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            alt=""
          />

          <p style={{ fontWeight: "700" }}>{name}</p>
          <p className="price">${price}</p>
        </Main>
      </Link>
    </div>
  );
}

export default Product;
