import styled, { keyframes } from "styled-components";

const NavWrapper = styled.nav`
  font-family: "Montserrat", sans-serif;
  :global(body) {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: center;
    background: white;
  }

  li {
    display: flex;
    padding: 25px 10px;
    justify-content: center;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 14px;
  }
  ul li a:hover {
    color: #f7bb2f;
  }
  #nav-check {
    display: none;
  }
  form {
    position: relative;
    transition: all 1s;
    width: 50px;
    height: 50px;

    box-sizing: border-box;
    top: -5px;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;

    padding: 0 20px;
  }

  .fa {
    box-sizing: border-box;
    padding: 5px;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4%;
    background: #dcdcdc;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
    color: #808080;
  }

  form:hover {
    width: 200px;
    cursor: pointer;
  }

  form:hover input {
    display: block;
  }

  form:hover .fa {
    background: #ccc;
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 5rem;

    .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0;
      top: auto;
      z-index: 5;
      padding-bottom: 4rem;
    }
    .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;

      color: #f7bb2f;
    }

    .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid black;
    }
    .nav-links {
      display: none;
    }
    .nav-links {
      display: block;
      width: 100%;
      background-color: white;
      justify-content: center;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 10%;
      left: 0;
      z-index: 2;
    }
    .nav-links li {
      padding: 0.5rem;
      top: 10rem;
    }

    .nav-links li a {
      display: block;
      width: 2rem;
      color: black;
    }

    #nav-check:not(:checked) + .nav-links {
      height: 0px;
    }
    #nav-check:checked + .nav-links {
      height: auto;
      overflow-y: hidden;
    }
    form {
      position: absolute;
      top: 1.5rem;
      left: 10px;
    }
  }
`;

export default NavWrapper;
