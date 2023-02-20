import Head from "next/head";
import { Product, FooterBanner, HeroBanner } from "../components/index";
import { client } from "../lib/client";
import { Main, ProductStyle } from "../styles/HomeStyle";

//Fetch the Data
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; //Grab all item from product table
  const products = await client.fetch(query); //fetch the product items

  const bannerQuery = '*[_type == "banner"]'; //grab all item from banner
  const bannerData = await client.fetch(bannerQuery); //fetch the banner items

  return {
    props: { products, bannerData },
  };
};

export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <Main>
        <h2>Best Selling Product</h2>
        <p>Speakers of many variation</p>
      </Main>

      <ProductStyle>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </ProductStyle>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}
