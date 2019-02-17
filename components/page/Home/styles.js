import styled, { keyframes } from "styled-components";

const Card = styled.div`
  .cardhover {
    width: 20rem;
    height: 20rem;
    background: #ccc;
    position: relative;
    text-align: center;
    z-index: 1;
    box-shadow: 2px 2px black;
  }
  /* Explore More*/
  .button {
    .alink {
      background: black;
      height: 20px;
      width: 7rem;
      padding: 10px 10px;
      text-decoration: none;
      text-align: center;
      position: absolute;
      bottom: 20%;
      left: 27%;
      color: white;
      visibility: hidden;
      opacity: 1;
    }
  }
  /* for title */
  .title {
    position: absolute;
    top: 30%;
    left: 27%;
    font-size: 1.5rem;
    color: white;
  }
  /*On Hovering card Color Changes*/
  .cardhover:hover {
    opacity: 0.7;
    background: #f7bb2f;
  }

  .cardhover:hover .alink {
    visibility: visible;
    transition-delay: 0.1s;
  }
`;

export default Card;
