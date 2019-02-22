// we are making the styles as well sot that files dont become to large
// and they are readable

// here we will define styles

import styled from "styled-components";
import repair from "./imagerepair/repair1.jpg";

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

export { Heading, Paragraph, Button, Wrapper };

// by exporting them we can import them from any file
