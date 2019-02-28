// we are making the styles as well sot that files dont become to large
// and they are readable

// here we will define styles

//you are telling me to reduce the number of components ?
// Let me show you

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

// now you got the point right, using one styled components for common components
// and try incapsulating all the child styles inside the component
// explain it to me what i did
//made the image responsive too, by specifying width 100% and enclosing the
// image in a separate div.
// nope from the starting
// Used a single component for entire design, and specifying img and div
//as it's child (so that we can style them too)
//Then made the image responsive
//The mistake from my side was using too many components that cluttered things
// Cool there are margin and padding issues now, fix them
// Style the button better
// remove the white margin
// give it more padding on left and right.ok
const ItemContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 4rem;
  /* border: 2px solid gray; */
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

/* by exporting them we can import them from any file */
// hey so you have used flex box
// so do yu know grid ?
// and btw create a single styled compo il show see
//you are not working on current master
// ill show you
// so did you get my point ?
// like i should work n a single parent component?
// yeah. but for now well try to solve this problem first and then you can try to create it into a single compo
//yes
// text is the one causing the problem ? ya
// okay see you have made the text responsive but not the image
// firstly you need to make bothe the compo responsive.
// there are two ways one is by grid and other one is by j
// my code is not working in here

// i have used  grid to make it responsive see
// i have created two grid areas
// each will act like the way i have positoned them if you had pulled the code i could have explained you everything
// ok let me pull and try again
//i'll let you know then? if I could solve the problem?yeah ok thanks manbye byr
