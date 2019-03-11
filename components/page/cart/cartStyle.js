import styled from "styled-components";

const Styles = styled.div`
  #mainCart {
    width: 98%;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
  }

  #mainCart > div:first-child {
    width: 30%;
    height: 100%;
  }

  #mainCart > div:first-child img {
    width: 100%;
    height: 100%;
  }

  #mainCart > div:nth-child(2) {
    width: 69%;
    height: 100%;
  }

  #mainCart > div:nth-child(2) > p {
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
  #mainCart > div:nth-child(2) > span:nth-child(6) {
    color: rgb(0, 161, 255);
    margin-left: 5%;
    font-size: 18px;
  }

  @media (min-width: 1205px) {
    .values {
      display: flex;
      justify-content: space-around;
    }
    .values > div:first-child {
      width: 40%;
    }
    .values > div:nth-child(2) {
      width: 55%;
    }
  }

  .values > div:first-child {
    margin-top: 8px;
    margin-bottom: 20px;
  }

  @media (min-width: 482px) {
    .input {
      width: 30px;
      height: 30px;
      border-radius: 20px;
    }
    .count {
      width: 80px;
    }
  }

  @media (min-width: 375px) and (max-width: 483px) {
    .input {
      width: 25px;
      border-radius: 25px;
    }
    .count {
      width: 40px;
      height: 22px;
    }
  }

  @media (max-width: 374px) {
    .input {
      width: 20px;
      border-radius: 25px;
    }
    .count {
      width: 25px;
      height: 22px;
    }
  }

  .input {
    margin-left: 5%;
    border: 1px solid rgba(180, 180, 180, 0.7);
    background-color: white;
    color: black;
    font-size: 25px;
    text-decoration: none;
    padding: 0;
  }

  .input:hover {
    cursor: pointer;
    background-color: rgba(180, 180, 180, 0.2);
  }

  .count {
    display: inline-block;
    padding: 1%;
    margin-left: 5%;
    border: 1px solid rgba(180, 180, 180, 0.7);
    background-color: white;
    color: black;
    font-size: 20px;
    text-decoration: none;
  }
`;

export { Styles };
