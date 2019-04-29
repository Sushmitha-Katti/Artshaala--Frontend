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
  @media (min-width: 768px) {
    #main > div:nth-child(3) {
      display: flex;
      justify-content: space-between;
    }
    #main > div:nth-child(3) > .contactForm {
      order: 2;
      width: 35%;
      margin-right: 7%;
    }
    .address {
      order: 1;
      margin-left: 5%;
      width: 40%;
    }
    #main > div:nth-child(2) h1 {
      font-size: 4vmax;
    }
    #main > div:nth-child(2) h1:before,
    #main > div:nth-child(2) h1:after {
      width: 36%;
    }
    #main > div:nth-child(2) p {
      font-size: 20px;
    }
    form p {
      font-size: 40px;
    }
  }
  @media (max-width: 768px) {
    #main > div:nth-child(3) > div:first-child {
      width: 80%;
      margin-left: 10%;
    }
    .address {
      margin-left: 10%;
      width: 80%;
    }
    #main > div:nth-child(2) h1 {
      font-size: 35px;
    }
    #main > div:nth-child(2) h1:before,
    #main > div:nth-child(2) h1:after {
      width: 27%;
    }
    #main > div:nth-child(2) p {
      font-size: 2.5vmax;
    }
    form p {
      font-size: 30px;
    }
    .address h1 {
      font-size: 30px;
    }
    .address h2 {
      font-size: 25px;
    }
    .address h4 {
      font-size: 17px;
    }
  }
  @media (max-width: 480px) {
    #main > div:nth-child(2) h1:before,
    #main > div:nth-child(2) h1:after {
      width: 15%;
    }
  }
  #main > div:first-child {
    width: 100%;
    height: 400px;
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
  }
  #main > div:nth-child(2) h1:before {
    right: 0.5em;
  }
  #main > div:nth-child(2) h1:after {
    left: 0.5em;
  }
  #main > div:nth-child(2) p {
    text-align: center;
    padding-top: 20px;
    padding-left: 9%;
    padding-right: 9%;
    color: rgb(60, 60, 60);
    font-family: "Abel", sans-serif;
  }
  #main > div:nth-child(3) > div:first-child {
    margin-top: 60px;
  }
  form > p {
    color: rgb(60, 60, 60);
    margin-bottom: 30px;
    font-family: "Montserrat", sans-serif;
  }
  input[type="text"],
  textarea, input[type = "email"] {
    background-color: rgb(60, 60, 60);
    font-size: 20px;
    padding: 2%;
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
    font-size: 18px;
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
    margin-top: 40px;
    padding: 2%;
    padding-top: 0.8%;
    /*background-color: rgba(180, 180, 180, 0.1);*/
    color: rgb(60, 60, 60);
    margin-bottom: 30%;
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