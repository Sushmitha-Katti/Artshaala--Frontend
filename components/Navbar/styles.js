import styled from "styled-components";

const NavWrapper = styled.nav`
  font-family: "Montserrat", sans-serif;
  :global(body) {
    margin: 0;
    padding: 0;
  }
  .Header {
    background: #f8f8f8;
    text-align: center;
    padding: 1rem;

    position: relative;
    border-bottom: 1px solid black;

    .image {
      height: 50px;
      width: 200px;
    }
    .contact {
      display: inline-block;
      position: absolute;
      left: 10%;
      top: 30%;
    }
    @media only screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      pading-left: 1rem;
      padding-right: 1rem;

      .contact {
        position: relative;
      }

      .image {
        height: 50px;
        width: 120px;
      }
    }
    @media only screen and (max-width: 200px) {
      flex-direction: row;
      justify-content: center;
      .contact {
        display: none;
      }
    }
  }

  .Navbar {
    position: relative;
    margin-top: 0px;
    * {
      box-sizing: border-box;

      text-align: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      background: white;
      margin-top: 0px;
    }

    li {
      display: flex;
      padding: 25px 10px;
      justify-content: center;
      z-index: 10;
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
      background: #f8f8f8;
      text-align: center;
      font-size: 1em;
      transition: all 1s;
      color: #808080;
    }
    @media only screen and (min-width: 768px) {
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
        padding: 0;
      }
      .nav-links li {
        padding: 0.5rem;
        top: 10rem;
        width: 100%;
        margin: 0;
      }

      .nav-links li a {
        display: block;
        color: black;
      }

      #nav-check:not(:checked) + .nav-links {
        height: 0px;
      }
      #nav-check:checked + .nav-links {
        height: auto;
        overflow-y: hidden;
        form {
          display: none;
        }
      }
      form {
        position: absolute;
        top: 0.5rem;
        left: 0px;
        margin-left: 0px;
      }
      input {
        display: block;
        width: 200px;
      }
    }
  }
`;

export default NavWrapper;
