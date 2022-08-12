import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/Products";
import { Gallery } from "../styles/Gallery";
import HeroSection from "../components/HeroSection";
import Particle from "../components/Particle";
import Footer from "../components/Footer";

export default function Home() {
  //Fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  //Check for the data coming in
  if (fetching) return <p> Loading... </p>;
  if (error) return <p> {error.message} </p>;

  //Make working with products simpler
  const products = data.products.data;

  return (
    <div>
      <Head>
        <title> Planterra </title>
        <meta name="description" content="E-Commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <main>
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
