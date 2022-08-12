import styled from "styled-components";

export default function Footer() {
  return (
    <Credit>
      <a
        href="https://icons8.com/illustrations"
        target="_blank"
        rel="noopener noreferrer"
      >
        Landing Page Illustration by Victoria Chepkasova
      </a>
    </Credit>
  );
}

const Credit = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;
  color: white;
  text-align: center;
`;
