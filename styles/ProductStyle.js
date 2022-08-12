import styled from "styled-components";

export const ProductStyle = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
  border-radius: 20px;
  width: 80%;
  img {
    width: 100%;
    cursor: pointer;
    border-radius: 20px 20px 0px 0px;
  }
  h2 {
    text-align: center;
    padding: 0.5rem 0rem;
  }

  h3 {
    text-align: center;
  }
`;
