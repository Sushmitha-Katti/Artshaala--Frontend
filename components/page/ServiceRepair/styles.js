// we are making the styles as well sot that files dont become to large
// and they are readable

// here we will define styles

import styled from "styled-components";
import one from "./imagerepair/one.jpg";
import two from "./imagerepair/two.jpg";
import three from "./imagerepair/three.jpg";
import four from "./imagerepair/four.jpg";
import five from "./imagerepair/five.jpg";
import six from "./imagerepair/six.jpg";
import seven from "./imagerepair/seven.jpg";

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
  /* text-align: left; */
`;

const One = styled.section`
  height: 400px;
  margin: 50px;
  padding: 4em;
  border: 2px solid gray;
  display: flex;
  flex-direction: row;
`;
const Two = styled.section`
  height: 400px;
  margin: 50px;
  padding: 4em;
  border: 2px solid gray;
  display: flex;
  flex-direction: row;
`;
const Three = styled.section`
  height: 400px;
  margin: 50px;
  padding: 4em;
  border: 2px solid gray;
  display: flex;
  flex-direction: row;
`;
const Four = styled.section`
  height: 400px;
  margin: 50px;
  padding: 4em;
  border: 2px solid gray;
  display: flex;
  flex-direction: row;
`;
const Five = styled.section`
  height: 400px;
  margin: 50px;
  padding: 4em;
  border: 2px solid gray;
  display: flex;
  flex-direction: row;
`;
const Six = styled.section`
  height: 400px;
  margin: 50px;
  padding: 4em;
  border: 2px solid gray;
  display: flex;
  flex-direction: row;
`;
const Seven = styled.section`
  height: 400px;
  margin: 50px;
  padding: 4em;
  border: 2px solid gray;
  display: flex;
  flex-direction: row;
`;

const Imagestyle = styled.div`
  display: block;
  margin-left: 0%;
  margin-right: 20px;
  flex: 2;

  @media (min-width: 700px) {
    Imagestyle {
      flex-direction: column;
    }
  }
`;

const ImageTwo = styled.section`
  display: block;
  margin-left: 0%;
  margin-right: 20px;
  flex: 2;
  background-image: url({two});
  @media (min-width: 700px) {
    ImageTwo {
      flex-direction: column;
    }
  }
`;
const ImageThree = styled.div`
  display: block;
  margin-left: 0%;
  margin-right: 20px;
  flex: 2;
  background-image: url({two});
  @media (min-width: 700px) {
    ImageThree {
      flex-direction: column;
    }
  }
`;
const ImageFour = styled.div`
  display: block;
  margin-left: 0%;
  margin-right: 20px;
  flex: 2;
  background-image: url({two});
  @media (min-width: 700px) {
    ImageFour {
      flex-direction: column;
    }
  }
`;
const ImageFive = styled.div`
  display: block;
  margin-left: 0%;
  margin-right: 20px;
  flex: 2;
  background-image: url({two});
  @media (min-width: 700px) {
    ImageFive {
      flex-direction: column;
    }
  }
`;
const ImageSix = styled.div`
  display: block;
  margin-left: 0%;
  margin-right: 20px;
  flex: 2;
  background-image: url({two});
  @media (min-width: 700px) {
    ImageSix {
      flex-direction: column;
    }
  }
`;
const ImageSeven = styled.div`
  display: block;
  margin-left: 0%;
  margin-right: 20px;
  flex: 2;
  background-image: url({two});
  @media (min-width: 700px) {
    ImageSeven {
      flex-direction: column;
    }
  }
`;

const Text = styled.section`
  position: relative;

  float: left;
  flex: 2;
`;
const TextTwo = styled.section`
  position: relative;

  float: left;
  flex: 2;
`;
const TextThree = styled.section`
  position: relative;

  float: left;
  flex: 2;
`;
const TextFour = styled.section`
  position: relative;

  float: left;
  flex: 2;
`;
const TextFive = styled.section`
  position: relative;

  float: left;
  flex: 2;
`;
const TextSix = styled.section`
  position: relative;

  float: left;
  flex: 2;
`;
const TextSeven = styled.section`
  position: relative;

  float: left;
  flex: 2;
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
  Div,
  Two,
  ImageTwo,
  TextTwo,
  Three,
  ImageThree,
  TextThree,
  Four,
  ImageFour,
  TextFour,
  Five,
  ImageFive,
  TextFive,
  Six,
  ImageSix,
  TextSix,
  Seven,
  ImageSeven,
  TextSeven
};

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
