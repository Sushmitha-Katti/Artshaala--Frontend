import styled, { keyframes } from "styled-components";

const Card = styled.div`
  font-family: "Montserrat", sans-serif;
  margin-top: 2rem;
  margin-right: 1rem;
  .cardhover {
    width: 17rem;
    height: 17rem;
    background: #ccc;
    position: relative;
    text-align: center;
    z-index: 1;
    box-shadow: 2px 2px black;
  }
  /* Explore More*/
  .button {
    background: #303030;
    height: 20px;
    width: 7rem;
    padding: 10px 15px;
    text-decoration: none;
    text-align: center;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    visibility: hidden;
  }
  /* for title */
  .title {
    position: absolute;
    top: 20%;
    left: 50%;
    padding: 0px;
    margin: 0px;
    transform: translateX(-50%);
    font-size: 1.5rem;
    color: white;
  }
  .image {
    height: 100%;
    width: 100%;
  }
  /*On Hovering card Color Changes*/
  .cardhover:hover .button {
    visibility: visible;
    transition: 0.1s ease-out;
  }
  .hoveroverlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.3s ease;
    background-color: #f7bb2f;
  }
  .imageoverlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.7;
    transition: 0.3s ease;
    background-color: #484848;
  }
  @media only screen and (min-width: 768px) {
    .cardhover:hover .hoveroverlay {
      opacity: 0.7;
    }
  }
  @media only screen and (max-width: 768px) {
    .cardhover {
      width: 14.5rem;
      height: 14.5rem;
    }
    .title {
      font-size: 1.3rem;
    }
    .button {
      visibility: visible;
      background: #f7bb2f;
      opacity: 0.7;
      border-radius: 3%;
    }
  }
`;
/*****************************************************************************************
 * For Courosel Cards
 */
const Cards = styled.div`
  font-family: "Montserrat", sans-serif;
  margin: 3rem 3rem;

  @media only screen and (max-width: 768px) {
    margin: 2rem 2rem;
  }
`;
/*****************************************************************************************
 * For Courososel Card
 */
const CouroselWrapper = styled.div`
  .card {
    height: 340px;
    width: 240px;
    border: 1px solid white;
    box-shadow: 5px 10px 8px #888888;
    margin: 0.7rem;
  }
  .cardimg {
    height: inherit;
    width: inherit;
    padding-bottom: 10px;
  }
  .rating {
    display: flex;
    justify-content: space-between;
    z-index: 5;
    .fa {
      font-size: 17px;
      color: #404040;
      margin: 0.1rem;
    }
    .amount {
      color: #f7bb2f;
    }
  }
  @media only screen and (max-width: 768px) {
    .card {
      height: 250px;
      width: 250px;
      border: 1px solid white;
      box-shadow: 5px 10px 8px #888888;
      margin: 0.7rem;
    }
    .cardimg {
      max-height: 250;
      max-width: 250;
      padding-bottom: 10px;
    }
  }
`;
export { Card, Cards, CouroselWrapper };
