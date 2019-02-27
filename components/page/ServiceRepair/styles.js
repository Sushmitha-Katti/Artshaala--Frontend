// we are making the styles as well sot that files dont become to large
// and they are readable

// here we will define styles

import styled from "styled-components";
import repair from "./imagerepair/repair1.jpg";
import one from "./imagerepair/one.jpg";
import two from "./imagerepair/two2.png";
import three from "./imagerepair/three.png";
import four from "./imagerepair/four.jpg";
import five from "./imagerepair/five.jpg";
import six from "./imagerepair/six.jpg";
import seven from "./imagerepair/seven7.jpg";

const Heading = styled.h2`
  color: black;
  text-align: center;
  height: 30px;
  font-size: 40px;
`;

const Paragraph = styled.p`
  color: black;
  text-align: center;
  text-align: justify;
`;
const Button = styled.button`
  background-color: lightgray;
  border-radius: 3px;
  border: 8px solid gray;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Wrapper = styled.section`
  padding: 4em;
  background-image: url(${repair});
  text-align: center;
`;

const Container = styled.div`
  text-align: left;
  background-color: gray;
`;

const One = styled.section`
  width: 350px;
  height: 400px;
  padding: 50px;
  border: 8px solid gray;
  background-image: url(${one});
  font-weight: bold;
`;
const Two = styled.div`
  width: 350px;
  background-image: url(${two});
  height: 400px;
  padding: 50px;
  border: 8px solid gray;

  font-weight: bold;
  float: right;
  position: relative;
  bottom: 517px;
`;
const Three = styled.section`
  width: 350px;
  height: 400px;
  padding: 50px;
  border: 8px solid gray;
  background-image: url(${three});
  font-weight: bold;
`;
const Four = styled.section`
  width: 350px;
  height: 400px;
  padding: 50px;
  border: 8px solid gray;
  background-image: url(${four});
  font-weight: bold;
  float: right;
  position: relative;
  bottom: 517px;
`;
const Five = styled.section`
  width: 350px;
  height: 400px;
  padding: 50px;
  border: 8px solid gray;
  background-image: url(${five});
  font-weight: bold;
`;
const Six = styled.section`
  width: 350px;
  height: 400px;
  padding: 50px;
  border: 8px solid gray;
  background-image: url(${six});
  font-weight: bold;
  float: right;
  position: relative;
  bottom: 517px;
`;
const Seven = styled.section`
  width: 350px;
  height: 400px;
  padding: 50px;
  border: 8px solid gray;
  background-image: url(${seven});
  font-weight: bold;
`;

const Text = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  z-index: 2;
  width: 80%;
  padding: 5px;
  text-align: left;
`;

export {
  Heading,
  Paragraph,
  Button,
  Wrapper,
  Container,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Text
};

// by exporting them we can import them from any file
