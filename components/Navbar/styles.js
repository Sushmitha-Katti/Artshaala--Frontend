import styled from "styled-components";

const NavWrapper = styled.nav`
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.10);
  background: #F0F0F0;
  width:100%;
  :global(body) {
    margin: 0;
    padding: 0;
  }
  .Header {
    .ribbon{
      background-image: linear-gradient(to right, #f7bb2f , orange,#f7bb2f,orange, #f7bb2f);
      width:100%;
      height: 0.3rem;
      margin-bottom:1rem;

    }
    
  

    .gridlogoandsearch{
      display:grid;
      grid-template-columns:1fr 4fr 1fr 1fr;
      
      #nothover{
        position:relative;
        margin-left: 5rem;
        margin-top:0.2rem;
 

      .cartimage{
      
        padding: 5px;
      width:2.3rem;
      height:2.3rem;
      border-radius: 50%;
    
    }
    .count{
      position:absolute;
      top:0;
    }
         
    }
    }
    
    .image {
      margin-left:1rem;
      height: 50px;
      width: 200px;
    }
    .contact {
      margin-left:1rem;
      margin-top:1rem;
      display: inline-block;
      margin-bottom: 1rem;
      font-size:1rem;
     
     
    }
    @media only screen and (max-width: 768px) {
      .ribbon{
      background-image: linear-gradient(to right, #f7bb2f , orange,#f7bb2f,orange, #f7bb2f);
      width:100%;
      height: 0.3rem;
      margin-bottom:1rem;
      }
      .contact{
        display:none;
      }
      .gridlogoandsearch div:nth-child(2){
        grid-column:1/6;
        grid-row: 2/ 3;

      }
      .gridlogoandsearch div:nth-child(1){
        grid-column:3/4;
        grid-row: 1/ 2;
        img{
          width:250px;
          height:70px;
        }

      }
      .gridlogoandsearch div:nth-child(4){
        grid-column:4/5;
        grid-row: 1/ 2;
        margin-right:1rem;
        
        margin-left:0rem;
       margin-top:0rem;


      }

    
      
    }


    @media only screen and (max-width: 420px) {
      .ribbon{
      background-image: linear-gradient(to right, #f7bb2f , orange,#f7bb2f,orange, #f7bb2f);
      width:100%;
      height: 0.3rem;
      margin-bottom:1rem;
      }
      .contact{
        display:none;
      }
      .gridlogoandsearch div:nth-child(2){
        grid-column:2fr;
        grid-row: 2/ 3;

      }
      .gridlogoandsearch div:nth-child(1){
        grid-column:2fr;
        grid-row: 1/ 2;
        img{
          width:150px;
          height:50px;
        }

      }
      .gridlogoandsearch div:nth-child(4){
        grid-column:1fr;
        grid-row: 1/ 2;
        margin-right:1rem;
        
        margin-left:0rem;
       margin-top:0rem;


      }

    
      
    }
    
  
    
  }
  .Navbar {
    
   
    margin-top: 0px;
    * {
      box-sizing: border-box;
      text-align: center;
    }
    .nav-links {
     
     
     
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 0px;
     
    }
    .Sign.In{
      color:orange;
      font-size:1rem;
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
     a{ color: #f7bb2f;}
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
    
    @media only screen and (max-width: 780px) {
      
        padding-bottom:0.8rem;
      
      
      .nav-btn {
        display: inline-block;
        position: absolute;
        left: 5px;
        top: 30px;
        z-index: 300;
        margin-bottom: 4rem;
        
      }
      .nav-btn > label {
        display: inline-block;
        width: 50px;
        height: 50px;
        padding: 13px;
        color: #f7bb2f;
        cursor: pointer
      }
      .nav-btn > label > span {
        display: block;
        width: 25px;
        height: 8px;
        border-top: 2.5px solid #f7bb2f;
      }
      .nav-links {
        display: none;
      }
      .nav-links {
        display: block;
        
        width: 0%;
        box-shadow: 0 35px 35px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.10);
       
        justify-content: center;
        height: 0%;
        
        
        overflow-y: hidden;
        top: 40px;
        left: 0;
        padding: 0rem;

        position: absolute;
        margin-top: 0rem;
        background: white;
      }
      .nav-links li {
        padding: 2rem 1rem;
        top: 10rem;
        width: 100%;
        margin: 0;
        border-bottom: 1px solid orange;
      }
      .nav-links li a {
        display: block;
        color: black;
        font-size:1rem;
        font-weight:bold;
      }

      #nav-check:not(:checked) + .nav-links {
        height: 0px;
      }
      #nav-check:checked + .nav-links {
        position: absolute;
        border-top: 0.3rem solid orange;
        height: auto;
        width:100%;
        z-index: 100;
        padding: 3rem 3rem;
        top: 0.3rem;
        transition: all 0.4s linear;
         border-bottom-left-radius:0%;
        
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
          display:none
        }
      }
    }
  }
`;

export default NavWrapper;
