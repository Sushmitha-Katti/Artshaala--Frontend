import styled from "styled-components";

const Styling = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 900px) {
    #main > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
    }

    #main > div:nth-child(2) > div:first-child {
      width: 45%;
      height: 510px;
      margin-top: 50px;
      margin-left: 5%;
      padding-bottom: 20px;
    }

    #main > div:nth-child(2) > div:nth-child(2) {
      width: 38%;
      margin-right: 5%;
      height: 530px;
    }

    #main > div:nth-child(3) {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (min-width: 1024px) {
    form > div > div:first-child {
      display: flex;
      justify-content: space-around;
      margin-right: 6%;
    }
    form > div > div:first-child input {
      width: 40%;
      margin-left: 1%;
    }
  }

  @media (min-width: 540px) and (max-width: 900px) {
    form > div > div:first-child {
      display: flex;
      justify-content: space-around;
      margin-right: 6%;
    }
    form > div > div:first-child input {
      width: 40%;
      margin-left: 1%;
    }
  }

  @media (max-width: 900px) {
    #main > div:nth-child(2) > div:first-child {
      width: 88%;
      padding-bottom: 20px;
      margin-top: 50px;
      margin-left: 6%;
    }

    #main > div:nth-child(2) > div:nth-child(2) {
      width: 88%;
      margin-left: 6%;
    }
  }

  #main > div:first-child {
    width: 100%;
    height: 100px;
    border-bottom: 2px solid rgb(63, 118, 166);
  }

  #main {
    width: 100%;
    height: 100%;
    background-image: url("../pictures/image5.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
  }

  #main > div:nth-child(2) > div:first-child {
    position: relative;
    background-color: rgba(117, 155, 210, 0.4);
    box-shadow: -5px 5px 20px rgb(180, 180, 180);
    border: 1px dotted rgb(117, 155, 210);
  }

  #main > div:nth-child(2) > div:nth-child(2) {
    margin-top: 50px;
    background-color: rgba(106, 90, 205, 0.2);
    border: 1px solid rgba(106, 90, 205, 0.5);
    box-shadow: -4px 4px 20px rgba(106, 90, 205, 0.7);
  }

  #main > div:nth-child(2) > div:first-child > h2 {
    font-family: "Patua One", cursive;
    font-size: 50px;
    margin-bottom: 30px;
    color: rgb(108, 120, 158);
    text-shadow: 4px 4px 30px white;
    padding-top: 10px;
    margin-left: 2%;
  }

  #main > div:nth-child(2) > div:first-child > p {
    font-family: courier;
    font-size: 25px;
    margin-left: 3%;
    margin-right: 6%;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    margin-bottom: 20px;
  }

  #main > div:nth-child(3) {
    width: 83%;
    padding: 3%;
    margin-top: 100px;
    margin-left: 6%;
    margin-bottom: 40px;
    background-color: rgba(180, 180, 180, 0.2);
    /*background-image: url("../pictures/image11.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;*/
  }

  #main > div:nth-child(3) > div:first-child,
  #main > div:nth-child(3) > div:nth-child(2) {
    background-color: rgba(180, 180, 180, 0.4);
    width: 88%;
    margin: 3%;
    padding: 3%;
    line-height: 30px;
    font-family: "Montserrat", sans-serif;
    color: rgb(80, 40, 90);
  }

  #main > div:nth-child(3) > div:first-child {
    margin-bottom: 30px;
  }

  #main > div:nth-child(3) > div:first-child h2 {
    margin-bottom: 15px;
    color: black;
  }

  #main > div:nth-child(3) > div:nth-child(2) a {
    text-decoration: none;
    color: rgb(80, 90, 0);
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

  input[type="text"] {
    height: 45px;
  }

  input[type="text"],
  textarea {
    border: 1px black dotted;
    outline: none;
    border-radius: 15px;
    background-color: rgba(180, 180, 180, 0.2);
    box-sizing: border-box;
    font-size: 20px;
    padding: 13px;
    color: black;
    font-family: courier;
    margin-left: 5%;
    margin-bottom: 25px;
    width: 85%;
  }

  textarea {
    margin-bottom: 5px;
  }

  input[type="submit"] {
    margin-top: 15px;
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

  #main > div:nth-child(4) {
    width: 100%;
    height: 100px;
    background-color: rgba(63, 118, 166, 0.7);
    border-top: 2px solid rgb(63, 118, 166);
  }
`;

export { Styling };
