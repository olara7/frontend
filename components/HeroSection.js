import styled from "styled-components";
import Image from "next/image";

import shopping from "../public/shopping.png";
import Particle from "./Particle";

import { Wrapper, GradiantWrapper, ProductsHeader } from "../styles/HeroStyles";

export default function HeroSection() {
  return (
    <Wrapper>
      <h1> FIND THE PERFECT </h1>
      <h1> PLANT FOR YOUR </h1>
      <GradiantWrapper>
        <h1>
          <span> WONDERFUL </span> HOME
        </h1>
      </GradiantWrapper>
      <button onClick={() => window.scrollTo(0, 1000)}>
        BROWSE OUR PRODUCTS
      </button>
      <Image src={shopping} alt="shopping girl" />
      <ProductsHeader> Our Products </ProductsHeader>
    </Wrapper>
  );
}
