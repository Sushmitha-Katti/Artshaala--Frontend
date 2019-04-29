import styled from "styled-components";

const NavWrapper = styled.nav`
  font-family: "Montserrat", sans-serif;
  :global(body) {
    margin: 0;
    padding: 0;
    z-index:0;
  }


  .main{
    background-color:#f7f7f7;
    width:100%;
}

.topnav {
    padding:20px;
    
    
 }
 .logo{
     width:12vw;
     margin-left:3vw;
     float:left;
 }
 
 .userinput{
  width:60%;
  height:30px;
  margin-left:30px;
  background-color: #f7f7f7;
  border:0.6px solid #b3b3b3;
}
 .userinput::placeholder{
    color:black;
    font-size:15px;
    padding:20px;
}

.search{
  position:absolute;
  width:45px;
  height:34px;   
  font-size:18px;
  background-color:#FBBD1D;
  border:0;

}
.box1{
  display:none;
}


@media (max-width:1200px){
    .logo{
        width:18vw;
        
    }
}
@media (max-width:950px) and (min-width:650px){
    .logo{
        width:20vw;
        
    }
}
@media (max-width:650px){
    .logo{
        margin-top:-1vw;
        width:25vw;
    }  
    .box{
      display:none;
    }
    .main{
      padding-bottom:20px;
    }
    
}
@media (max-width:350px){
    .logo{
        width:150px;
        margin-left:-10px;
        float:left;
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
      margin-top: -10px;
    }
    li {
      display: flex;
      padding: 0.5rem;
      height: 30px;
      justify-content: center;
      z-index: 10;
      margin: 25px 10px;
    }
    a {
      color: black;
      text-decoration: none;
      font-size: 14px;
      height: 20px;
    }
    a:hover {
      color: #f7bb2f;
    }

    #nav-check {
      display: none;
    }
    @media only screen and (max-width: 650px) {
      //padding-bottom: 5rem;
      
      .box1{
        display:block;
        padding-top:10px;
      }
      .box1 .userinput{
        margin-left:-20px;
      }
      .box1 .search{
        height:30px;
      }

      .nav-btn {
        display: inline-block;
        position: absolute;
        right: 0;
        top: auto;
        z-index: 7;
        margin-bottom: 4rem;
        // background: #e8e8e8;
      }
      .nav-btn > label {
        display: block;
        width: 50px;
        height: 50px;
        padding: 13px;
        color: #f7bb2f;
        margin-top:-35px;
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
        background: #f7f7f7;
        
      }
      .nav-links li {
        padding: 0.5rem;
        top: 10rem;
        width: 100%;
        margin: 0;
        border-bottom:1px solid #d9d9d9;
        
      }
      .nav-links li:nth-child(8){
        border:0;
      }
      .nav-links li:hover{
        background-color:#FBBD1D;
      }
      .nav-links li a {
        display: block;
        color: black;
      }
      
      #nav-check:not(:checked) + .nav-links {
        height: 0px;
        margin-top:20px;
      }
      #nav-check:checked + .nav-links {
        position: absolute;
        height: auto;
        overflow-y: hidden;
        z-index: 8;
        margin-top:20px;
      }
      #nav-check:checked + .a:hover {
        background-color:blue;
      }
    }
  }

 
`;

export default NavWrapper;
