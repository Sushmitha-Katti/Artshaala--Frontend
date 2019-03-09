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

  @media (min-width: 1025px){
    .cart {
        display: flex;
        justify-content: space-around;
      }

      .cart > div:first-child {
        width: 61%;
        margin-left: 10%;
        margin-right: 0.5%;
        padding: 1%;
      }

      .cart > div:nth-child(2) {
        width: 16%;
        
        margin-right: 10%;
        padding: 1%;
      }
      .cart > div:nth-child(2) button{
        width: 94%;
      }
  }

  @media (max-width: 1024px){
    .cart > div:first-child {
        margin-left: 7%;
        margin-right: 6%; 
        padding: 1%;
    }
    .cart > div:nth-child(2){
        margin-left: 7%;
        margin-right: 6%;
        padding: 3%; 
    }
    .cart > div:nth-child(2) button{
        width: 55%;
      }
  }

  

  .cart {
    font-family: "Roboto Condensed", sans-serif;
    margin-bottom: 60px;
  }

  .cart > div:first-child {
    border: 1px solid rgba(180, 180, 180, 0.7);
    border-radius: 15px;
    margin-top: 50px;
    padding-bottom: 30px;
  }

  .cart > div:nth-child(2) {
    border: 1px solid rgba(180, 180, 180, 0.7);
    border-radius: 15px;
    margin-top: 50px;
    height: 410px;
  }

  .cart > div:first-child > p {
    font-size: 30px;
    color: rgba(60, 60, 60, 0.9);
    margin-top: 3px;
    margin-left: 2%;
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

  @media (min-width: 1205px){
    .values{
        display:flex;
        justify-content: space-around;
    }
    .values>div:first-child{
        width: 40%;
    }
    .values>div:nth-child(2){
        width: 55%;
    }
}

.values>div:first-child{ 
      margin-top: 8px;
      margin-bottom: 20px;
}

@media (min-width: 482px){
    .input{
      width: 30px;
      height: 30px;
      border-radius: 20px;
    }
    .count{
      width: 80px;
    }
}

@media (min-width: 375px) and (max-width: 483px){
    .input{
      width: 25px;
      border-radius: 25px;
    }
    .count{
        width: 40px;
        height: 22px;
    }
}

@media (max-width: 374px){
  .input{
    width: 20px;
    border-radius: 25px;
  }
  .count{
    width: 25px;
    height: 22px;
  }
}

.input{
  margin-left: 5%;
  border: 1px solid rgba(180, 180, 180, 0.7);
  background-color: white;
  color: black;
  font-size: 25px;
  text-decoration: none;
  padding: 0;
}

.input:hover{
  cursor: pointer;
  background-color: rgba(180, 180, 180, 0.2);
}

.count{
  display: inline-block;
  padding: 1%;
  margin-left: 5%;
  border: 1px solid rgba(180, 180, 180, 0.7);
  background-color: white;
  color: black;
  font-size: 20px;
  text-decoration: none;
}

  .price {
    font-size: 18px;
    margin-left: 5%;
    color: rgb(0, 161, 255);
  }

  .subtotal {
    font-size: 23px;
    margin-left: 3%;
    color: rgb(200, 0, 0);
  }
`;

export { Styles };
