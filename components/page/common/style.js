// literally what is this

@import url("https://fonts.googleapis.com/css?family=Abel|Montserrat|Patua+One");
@import url("https://fonts.googleapis.com/css?family=Monoton");
/*font-family: 'Abel', sans-serif;
		font-family: 'Montserrat', sans-serif;
		font-family: 'Patua One', cursive;
		font-family: 'Monoton', cursive;*/
import styled from "styled-components";

const Styling = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  #main {
    width: 100%;
    height: 100%;
    background-image: url("../pictures/image5.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    opacity: 0.8;
  }

  #main > div > div:first-child {
    float: left;
    position: relative;
    width: 40%;
    height: 500px;
    margin-top: 50px;
    margin-left: 3%;
    background-color: rgba(255, 255, 255, 0.7);
  }

  #main > div > div:nth-child(2) {
    width: 40%;
    float: right;
    height: 515px;
    margin-right: 6%;
    margin-top: 50px;
    background-color: rgba(106, 90, 205, 0.2);
    border-left: 2px solid rgb(106, 90, 205);
    border-radius: 16px;
  }

  #main > div > div:first-child > h2 {
    font-family: "Patua One", cursive;
    font-size: 50px;
    margin-bottom: 30px;
    color: Tomato;
    padding-top: 10px;
    margin-left: 5%;
  }

  #main > div > div:first-child > p {
    font-family: courier;
    font-size: 25px;
    margin-left: 6%;
    margin-right: 2%;
    color: black;
    margin-bottom: 20px;
  }

  form > p {
    font-family: "Monoton", cursive;
    color: rgb(106, 90, 205);
    background: none;
    border-left: 3px #eee solid;
    font-size: 35px;
    margin-bottom: 30px;
    margin-left: 5%;
    margin-top: 10px;
    padding-left: 10px;
  }

  input[type="text"],
  textarea {
    border: 1px black dotted;
    outline: none;
    border-radius: 15px;
    background-color: rgba(180, 180, 180, 0.4);
    box-sizing: border-box;
    font-size: 20px;
    padding: 13px;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    margin-left: 4%;
    margin-bottom: 10px;
    width: 85%;
  }

  input[type="submit"] {
    margin-top: 25px;
    border-radius: 20px;
    border: none;
    width: 30%;
    height: 40px;
    margin-left: 5%;
    margin-bottom: 20px;
    background-color: DodgerBlue;
    font-size: 25px;
    color: white;
  }
`;

export { Styling };
