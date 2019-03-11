import styled from "styled-components";
import { puts } from "util";

const Heading = styled.h2`
  color: #ffd63f;
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
  > div {
    ul {
      width: 100%;
      margin: 0;
      padding: 20px;
      top: 0;
      left: 0;
      overflow: hidden;
      background-color: black;
      position: fixed;
    }

    li {
      float: left;
      margin-left: 2px;
    }

    li a {
      display: block;
      color: #ffd63f;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 20px;
    }
  }
  img {
    display: inline-block;
    vertical-align: top;
    width: 150px;
    height: 50px;
    margin-right: 50px;
  }
  button:first-child {
    padding: 10px;
    background-color: #ffd63f;
    font-weight: bold;
    margin-left: 100px;
  }
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
