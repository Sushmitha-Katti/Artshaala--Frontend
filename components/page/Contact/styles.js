import styled from "styled-components";

/*font-family: 'Abel', sans-serif;
		font-family: 'Montserrat', sans-serif;
		font-family: 'Patua One', cursive;
		font-family: 'Monoton', cursive;*/

const Styling = styled.div`
  #main {
    width: 100%;
    height: 100%;
  }

  #main > div:first-child {
    width: 100%;
    height: 400px;
    background-color: #f7bb2f;
  }

  #main > div:nth-child(2) {
    padding-top: 30px;
    background-color: rgba(180, 180, 180, 0.2);
    padding-bottom: 30px;
  }

  #main > div:nth-child(2) h1 {
    overflow: hidden;
    text-align: center;
    color: #f7bb2f;
    font-size: 50px;
    padding-left: 7%;
    padding-right: 7%;
    font-family: "Patua One", cursive;
  }

  #main > div:nth-child(2) h1:before,
  #main > div:nth-child(2) h1:after {
    background-color: rgb(180, 180, 180);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 36%;
  }

  #main > div:nth-child(2) h1:before {
    right: 0.5em;
    /*marign-left: -50%;*/
  }

  #main > div:nth-child(2) h1:after {
    left: 0.5em;
    /*margin-right: -0%;
    margin-right: -50%;*/
  }

  #main > div:nth-child(2) p {
    text-align: center;
    padding-top: 20px;
    padding-left: 150px;
    padding-right: 150px;
    font-size: 20px;
    color: rgb(60, 60, 60);
    font-family: "Abel", sans-serif;
  }

  #main > div:nth-child(3) {
    display: flex;
    justify-content: space-between;
  }

  #main > div:nth-child(3) > div:first-child {
    width: 35%;
    margin-right: 7%;
    margin-top: 60px;
    /*background-color: #f7bb2f;*/
    order: 2;
  }

  form > p {
    color: rgb(60, 60, 60);
    font-size: 40px;
    margin-bottom: 30px;
    font-family: "Montserrat", sans-serif;
  }

  input[type="text"],
  textarea {
    background-color: rgb(60, 60, 60);
    font-size: 20px;
    padding: 10px;
    color: white;
    font-family: courier;
    margin-bottom: 30px;
    width: 100%;
  }

  textarea {
    height: 100px;
    background-color: #f7bb2f;
    color: #000000;
  }

  button {
    border: none;
    width: 45%;
    height: 50px;
    margin-bottom: 20px;
    background-color: rgb(60, 60, 60);
    font-size: 15px;
    color: white;
  }
  button:hover {
    cursor: pointer;
  }
  span {
    margin-left: 10px;
    margin-right: 10px;
  }

  .address {
    order: 1;
    margin-left: 7%;
    margin-top: 60px;
    width: 40%;
    /*background-color: rgba(180, 180, 180, 0.4);*/
    color: rgb(60, 60, 60);
  }

  a {
    text-decoration: none;
    color: rgb(60, 60, 60);
  }

  .address h1,
  .address h2 {
    font-family: "Montserrat", sans-serif;
  }
`;

export { Styling };
