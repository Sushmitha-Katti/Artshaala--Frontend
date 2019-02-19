// we are making the styles as well sot that files dont become to large
// and they are readable

// here we will define styles

import styled from "styled-components";

const Heading = styled.h2`
  color: red;
`;

const Paragraph = styled.p`
  color: green;
`;

export { Paragraph, Heading };

// by exporting them we can import them from any file
