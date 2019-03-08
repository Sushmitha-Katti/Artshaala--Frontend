import styled from "styled-components";

const NavStyle = styled.nav`

:global(body){
        margin:0px;
    }
.topnav {
    overflow: hidden;
    background-color: #e9e9e9;
  }

    .logo{
       // width:16%;
       width:14vw;
       height:4vw;
        margin:1vw 2vw 1vw 5vw;       // top right bottom left
        float:left;
    }

   .main{
       margin-top:-450vw;
       
   }
    .user-input{
        margin-top:1vw;
        width:65vw;
        height:1vw;
        padding:1vw;
        
    }

    .search{
        background-color:#FBBD1D;
        border:0;
        padding:1vw;
       
        
       
    }
    .nav{
        border-bottom:1px solid #EAEAEB;
        text-align:right;
        height:70px;
        line-height:70px;

    }
    .menu{
        margin:0 30px 0 0;
    }
    .menu a{
        text-decoration:none;
        color:grey;
        margin:0 10px;
        line-height:70px;
    }

    .menu a:hover{
        color:#FBBD1D;
    }
    span{
        color:#54D17A
    }

    label{
        margin:0 40px 0 0;
        font-size:26px;
        line-height:70px;
        display:none;
        
    }
    #toggle{
        display:none;
    }

    @media (max-width:700px){
        label{
            display:block;
            cursor:pointer;
            
            float:right;
        }
        .menu { 
            display:none;
            
            
        }
        .menu a{
            display:block;
            border-bottom:1px solid #EAEAEB; 
            margin:0;
            text-align:right;
        }
        #toggle:checked + .menu{
            display:block;
            height:20px;
            width:20px;
            position:absolute;
            z-index=8;
            
        }
    }
`;




export default NavStyle;