import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 40%;
    border-radius: 20px;
  }

  @media (max-width: 450px) {
    display: block;

    text-align: center;

    img {
      width: 70%;
      margin-left: 0px;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 40% button {
    font-size: 1rem;
    font-font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  h3 {
    font-size: 3rem;
    color: white;
    margin-left: 30px;
  }

  p {
    font-size: 1.3rem;
    color: white;
    margin-left: 30px;
  }

  @media (max-width: 450px) {
    h3 {
      font-size: 2rem;
      margin-left: 0px;
    }

    p {
      font-size: 1rem;
      margin-left: 0px;
    }
  }
`;

export const QuantityNumber = styled.span`
  margin-left: 0px;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0rem;

  button {
    color: white;
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0rem 0.5rem;
    cursor: pointer;
  }

  p {
    color: white;
    width: 1rem;
    text-align: center;
  }

  span {
    color: white;
  }

  svg: {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: black;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 100px;
  margin-left: 20px;

  @media (max-width: 450px) {
    width: 70%;
    margin-left: 0px;
  }
`;
