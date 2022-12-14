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
    padding: 20px 30px;
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
    border: 0px solid transparent;
    background-image: linear-gradient(
      90deg,
      rgba(180, 71, 200, 1) 0%,
      rgba(120, 8, 181, 1) 100%
    );
    box-shadow: 0 0px 10px rgba(120, 8, 181, 1);

    background-clip: padding-box;
    overflow: hidden;
    z-index: 1;

    &:hover {
      color: linear-gradient(
        90deg,
        rgba(180, 71, 200, 1) 0%,
        rgba(120, 8, 181, 1) 100%
      );
      box-shadow: 0 5px 15px rgba(120, 8, 181, 1);
      transition: box-shadow 0.3s ease-in-out;
    }
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
