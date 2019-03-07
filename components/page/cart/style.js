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
    margin-right: 0.5%;
  }

  .cart > div:first-child > p {
    font-size: 30px;
    color: rgba(60, 60, 60, 0.9);
  }

  .cart > div:nth-child(2) {
    width: 16%;
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
    margin-bottom: 40px;
  }

  .cart > div:nth-child(2) button {
    border: none;
    border-radius: 12px;
    margin: 3%
    margin-top: 10px;
    width: 94%;
    height: 50px;
    margin-bottom: 20px;
    background-color: rgb(247,179,47);
    font-size: 18px;
    color: black;
  }
  .cart > div:nth-child(2) button:hover {
    cursor: pointer;
    background-color: rgba(247,179,47,0.7);
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

  .cart-products > div:nth-child(2) > p {
    font-size: 23px;
  }

  .input{
    width: 30px;
    height: 30px;
    margin-left: 2%;
    border: 1px solid rgba(180, 180, 180, 0.7);
    background-color: white;
    color: black;
    font-size: 25px;
    text-decoration: none;
    padding: 0;
  }

  .checked {
    color: white;
    background-color: orange;
    border-radius: 20px;
    padding: 4px;
    margin: 1%;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .reviews {
    color: rgb(0, 161, 255);
    margin-left: 5%;
    font-size: 18px;
  }

  .price {
    font-size: 18px;
    margin-left: 5%;
    color: rgb(0, 161, 255);
  }

  .subtotal {
    font-size: 18px;
    margin-left: 3%;
    color: rgb(200, 0, 0);
  }
`;

export { Styles };
