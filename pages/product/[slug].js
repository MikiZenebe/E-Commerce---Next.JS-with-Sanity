/* eslint-disable @next/next/no-img-element */
import React from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import {
  Main,
  Description,
  Review,
  Quantity,
  Button,
  MayLike,
  SmallImg,
} from "../../styles/DetailStyle";
import { Product } from "../../components";
import { useState } from "react";
import { useStateContext } from "../../context/StateContext";

//Fetch the Data
//{slug} means access everything in that slug
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`; //Fetch the detail of clicked product
  const productsQuery = '*[_type == "product"]'; //Fetch all products

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

//For page optimize & ready for uses multiple links
export const getStaticPaths = async () => {
  //Give me a products but return only the current slug
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

const ProductDetails = ({ products, product }) => {
  const { image, name, details, price } = product;

  //To change image with mouse hover and state for small images
  const [index, setIndex] = useState(0);

  //Grab the global state
  const { incQty, decQty, qty, onAdd } = useStateContext();

  return (
    <div>
      <Main>
        <div>
          <div className="img">
            <img
              className="img-detail"
              src={urlFor(image && image[index])}
              alt=""
            />
          </div>

          <SmallImg>
            {image?.map((item, id) => (
              <img
                className={
                  id === index ? "small-image selected-image" : "small-image"
                }
                key={id}
                src={urlFor(item)}
                alt=""
                onMouseEnter={() => setIndex(id)}
              />
            ))}
          </SmallImg>
        </div>

        <Description>
          <h1>{name}</h1>

          <Review>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </Review>

          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>

          <Quantity>
            <h3>Quantity</h3>
            <p className="quant-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </Quantity>

          <Button>
            <button
              className="cart"
              type="button"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>

            <button className="buy" type="button">
              Buy
            </button>
          </Button>
        </Description>
      </Main>

      <MayLike>
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="container track">
            {products.map((item, id) => (
              <Product key={id} product={item} />
            ))}
          </div>
        </div>
      </MayLike>
    </div>
  );
};

export default ProductDetails;
