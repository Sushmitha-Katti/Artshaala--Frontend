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
      .contact {
        position: relative;
      }
      display: flex;
      justify-content: center;
    }
    @media only screen and (max-width: 480px) {
      display: none;
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
      padding: 0.5rem 0.5rem 0.2rem 0.5rem;
      height: 30px;
      justify-content: center;
      z-index: 10;
      margin: 10px 10px;
    }
    a {
      color: black;
      text-decoration: none;
      font-size: 14px;
      height: 20px;
    }
    button {
    padding: 0;
    border: 0;
    font-size: 14px;
    font-family: inherit;
    
    background:none ;
  }
    #alink:hover {
      background: #f7bb2f;
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
    #nothover{
      
        border:1px solid orange;
        border-radius:10%;
        
      
      li:hover{
        background:none;
        .cart{
          color:orange;
        }
      }
    }
    
    .search {
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
    
    .mobilelogo {
      display: none;
    }
    @media only screen and (min-width: 480px) {
      form:hover {
        width: 200px;
        cursor: pointer;
      }
      form:hover input {
        display: block;
      }
      form:hover .search {
        background: #ccc;
      }
    }
    @media only screen and (max-width: 480px) {
      padding-bottom: 5rem;
      .nav-btn {
        display: inline-block;
        position: absolute;
        right: 0;
        top: auto;
        z-index: 7;
        margin-bottom: 4rem;
        background: #e8e8e8;
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
        justify-content: center;
        height: 0px;
        transition: all 0.3s ease-in;
        overflow-y: hidden;
        top: 10%;
        left: 0;
        padding: 0;
        position: absolute;
        margin-top: 2.8rem;
        background: #e8e8e8;
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
        position: absolute;
        height: auto;
        overflow-y: hidden;
        z-index: 8;
      }
      form {
        display: none;
      }

      .mobilelogo {
        display: block;
        position: absolute;

        top: 0.5rem;
        left: 0px;
        margin-left: 0px;
        z-index: 5;
        img {
          width: 100px;
          height: 30px;
        }
      }
    }
  }
`;

export default NavWrapper;
