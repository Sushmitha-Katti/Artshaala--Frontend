import styled from "styled-components";
/*font-family: 'Abel', sans-serif;
		font-family: 'Montserrat', sans-serif;
		font-family: 'Patua One', cursive;
        font-family: 'Monoton', cursive;
        font-family: 'Roboto Condensed', sans-serif;
        */

const Style = styled.div`
  margin-top: 2rem;
  margin-right: 2rem;

  #main {
    padding: 2%;
    border: 1px solid rgba(180, 180, 180, 0.9);
    position: relative;
  }

  #main > img {
    width: 100%;
  }

  #main p {
    font-family: "Abel", sans-serif;
    color: rgb(0, 0, 0, 0.8);
    margin-bottom: 5px;
  }

  .check {
    color: rgba(60, 60, 60, 0.9);
    padding: 2px;
  }

  #main > div > span:nth-child(6) {
    float: right;
    font-family: "Roboto Condensed", sans-serif;
    color: orange;
  }
`;

export { Style };
