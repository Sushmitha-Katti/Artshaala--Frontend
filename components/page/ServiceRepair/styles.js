import styled from "styled-components";
import { puts } from "util";

const Heading = styled.h2`
  color: rgb(204, 204, 0);
  text-align: center;
  height: 30px;
  font-size: 50px;
`;

const Paragraph = styled.p`
  color: black;
  text-align: center;

  font-size: 18px;
`;
const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 1px 1px;
  cursor: pointer;
  padding: 1em 3em;
`;

const Wrapper = styled.section`
  padding: 4em;
  background-color: gray;
  text-align: center;
`;
const ItemContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 4rem;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  img {
    max-width: 300px;
    width: 100%;
  }
  > div {
    text-align: left;

    padding: 30px;
  }
`;

const Div = styled.section`
  color: white;
  font-weight: bold;
`;

export { Heading, ItemContainer, Paragraph, Button, Div, Wrapper };


