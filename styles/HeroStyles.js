import styled from "styled-components";

export const ProductsHeader = styled.h1`
  margin: 5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;

  h1 {
    color: white;
    text-align: center;
    font-size: 3.5rem;
    font-family: Fredoka;
  }

  button {
    margin: 20px 0;
    min-height: 60px;
    padding: 20px 31px;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
    border-radius: 30px;
    box-shadow: none;
    background-color: transparent;
    background-position: top center;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    transition-property: background, color;
    position: relative;
    display: block;
    color: white;
    box-sizing: border-box;
    border: 2px solid transparent;
    background-image: linear-gradient(
      90deg,
      rgba(222, 63, 251, 1) 0%,
      rgba(145, 32, 207, 1) 100%
    );
    background-clip: padding-box;
    overflow: hidden;
    z-index: 1;
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 2.5rem;
    }

    button {
      padding: 10px 21px;
    }
  }
`;

export const GradiantWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: none;
`;
