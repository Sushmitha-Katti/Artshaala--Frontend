// we are making the styles as well sot that files dont become to large
// and they are readable

// here we will define styles

import styled from "styled-components";
import repair from "./imagerepair/repair1.jpg";
import one from "./imagerepair/one.jpg";
import two from "./imagerepair/two.jpg";
import three from "./imagerepair/three.png";
import four from "./imagerepair/four.jpg";
import five from "./imagerepair/five.jpg";
import six from "./imagerepair/six.jpg";
import seven from "./imagerepair/seven.jpg";

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
`;

const One = styled.section`
  width: 500px;
  height: 400px;
  padding: 50px;
  border: 1px solid black;
  background-image: url(${one});
  font-weight: bold;
`;
const Two = styled.div`
  width: 500px;
  height: 170px;
  padding: 50px;
  border: 1px solid black;
  background-image: url(${two});
  font-weight: bold;
`;
const Three = styled.section`
  width: 500px;
  height: 400px;
  padding: 50px;
  border: 1px solid black;
  background-image: url(${three});
  font-weight: bold;
`;
const Four = styled.section`
  width: 500px;
  height: 400px;
  padding: 50px;
  border: 1px solid black;
  background-image: url(${four});
  font-weight: bold;
`;
const Five = styled.section`
  width: 500px;
  height: 400px;
  padding: 50px;
  border: 1px solid black;
  background-image: url(${five});
  font-weight: bold;
`;
const Six = styled.section`
  width: 500px;
  height: 400px;
  padding: 50px;
  border: 1px solid black;
  background-image: url(${six});
  font-weight: bold;
`;
const Seven = styled.section`
  width: 500px;
  height: 300px;
  padding: 50px;
  border: 1px solid black;
  background-image: url(${seven});
  font-weight: bold;
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
  Seven
};

// by exporting them we can import them from any file
