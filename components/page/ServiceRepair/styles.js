// we are making the styles as well sot that files dont become to large
// and they are readable

// here we will define styles

import styled from "styled-components";
import repair from "./imagerepair/repair1.jpg";

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
  padding: 1em 1em;
`;

const Wrapper = styled.section`
  padding: 4em;
  background-color: gray;
  text-align: center;
`;

const Container = styled.div`
  text-align: left;
`;

const One = styled.section`
  height: 400px;
  padding: 4em;
  border: 2px solid gray;
`;

const Two = styled.section`
  height: 200px;
  padding: 4em;
  border: 2px solid gray;
`;

const Three = styled.section`
  height: 300px;
  padding: 4em;
  border: 2px solid gray;
`;

const Four = styled.section`
  height: 300px;
  padding: 4em;
  border: 2px solid gray;
`;

const Five = styled.section`
  height: 300px;
  padding: 4em;
  border: 2px solid gray;
`;

const Six = styled.section`
  height: 300px;
  padding: 4em;
  border: 2px solid gray;
`;

const Seven = styled.section`
  height: 300px;
  padding: 4em;
  border: 2px solid gray;
`;

const Imagestyle = styled.div`
  display: block;
  margin-left: 0%;
  margin-right: 100%;
  width: 50%;
`;

const Text = styled.section`
  float: right;
  position: relative;
  top: -300px;
`;

const TextTwo = styled.section`
  float: right;
  position: relative;
  top: -150px;
`;

const TextThree = styled.section`
  float: right;
  position: relative;
  top: -300px;
`;

const TextFour = styled.section`
  float: right;
  position: relative;
  top: -250px;
`;

const TextFive = styled.section`
  float: right;
  position: relative;
  top: -250px;
  right: 100px;
`;

const TextSix = styled.section`
  float: right;
  position: relative;
  top: -250px;
  right: 30px;
`;

const TextSeven = styled.section`
  float: right;
  position: relative;
  top: -250px;
  right: 120px;
`;

const Div = styled.section`
  color: white;
  font-weight: bold;
`;

export {
  Heading,
  Paragraph,
  Button,
  Wrapper,
  Container,
  One,
  Imagestyle,
  Text,
  Two,
  TextTwo,
  Three,
  TextThree,
  Four,
  TextFour,
  Five,
  TextFive,
  Six,
  TextSix,
  Seven,
  TextSeven,
  Div
};

/* by exporting them we can import them from any file */
