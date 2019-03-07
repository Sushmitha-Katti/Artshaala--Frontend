import styled from "styled-components";
/*font-family: 'Abel', sans-serif;
		font-family: 'Montserrat', sans-serif;
		font-family: 'Patua One', cursive;
        font-family: 'Monoton', cursive;
        font-family: 'Roboto Condensed', sans-serif;
        */
const Styles = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  #main {
    width: 100%;
    height: 100%;
  }

  .cart {
    display: flex;
    justify-content: space-around;
    font-family: "Roboto Condensed", sans-serif;
  }

  .cart > div:first-child {
    width: 61%;
    /*background-color: rgb(180, 180, 180);*/
    border: 1px solid rgba(180, 180, 180, 0.7);
    border-radius: 15px;
    margin-left: 10%;
    margin-top: 50px;
    padding: 1%;
  }

  .cart > div:first-child > p {
    font-size: 30px;
    color: rgba(60, 60, 60, 0.9);
  }

  .cart > div:nth-child(2) {
    width: 18%;
    height: 370px;
    border: 1px solid rgba(180, 180, 180, 0.7);
    border-radius: 15px;
    margin-right: 10%;
    margin-top: 50px;
    padding: 1%;
  }
  .cart > div:nth-child(2) p {
    font-size: 20px;
    color: rgba(60, 60, 60, 0.9);
  }
  .cart > div:nth-child(2) button {
    border: none;
    border-radius: 12px;
    margin: 3%
    margin-top: 200px;
    width: 94%;
    height: 50px;
    margin-bottom: 20px;
    background-color: #f7bb2f;
    font-size: 18px;
    color: black;
  }
  .cart > div:nth-child(2) button:hover {
    cursor: pointer;
  }

  .cart-products {
    width: 98%;
    height: 300px;
    /*background-color: rgb(180, 180, 180);*/
    display: flex;
    justify-content: space-between;
  }

  .cart-products > div:first-child {
    width: 30%;
    height: 100%;
  }

  .cart-products img {
    width: 100%;
    height: 100%;
    /*border: 1px solid black;*/
  }

  .cart-products > div:nth-child(2) {
    width: 69%;
    height: 100%;
  }

  .cart-products > div:nth-child(2) > h1 {
  }
`;

export { Styles };
