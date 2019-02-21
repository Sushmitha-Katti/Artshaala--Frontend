import styled from "styled-components";
import instrument from './instruments.png';



const Styling = styled.div`

    html,body{
        margin:0;
        padding:0;
    }

    .bgimg {
        background-image:url(${instrument});
        height: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        //min-width: 1240px;
        text-align:center;
        position:fixed;
        width:100%;
        
       
    }

    .bg {
        width: 100%;
        height: 100%;
         background:#fffcff;
         opacity: 0.6;
        //min-width: 1240px;
        margin:0;
        padding:70px 0px 0px 0px; 
        position:fixed;
       
    }

    .b1 {
       
        opacity: 1.0;
        
        display:inline-block;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }


    .line1 {
        padding:0;
        margin:0;
        color:#FBBD1D;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size:15px;
        
    }
  
    .line2 {
        padding:0;
        margin:0;
        font-size:40px;
        font-family:courier-prime, monospace;
        font-style: normal;
        font-weight: 400;
        
    }

    .line3 {
        padding:0;
        margin:0;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 400;
        width:400px;
        display:inline-block;
    }
    .line4 {
        padding:15px 60px 15px;
        color:white;
        margin:15px;
        border:0px;
        display:inline-block;
        background-color:#FBBD1D;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 700;
    }
     
    .l1 {
        opacity: 0.5;
        background-color:white;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-51%, -45%);
        border: 1px solid #8c8c8c;
        padding:28px;
        border-radius:60px;

     } 

     .l2 {
        opacity: 0.3;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 45.5%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #8c8c8c;
        padding:45px;
        border-radius:60px;

     } 

     .l3 {
        opacity: 0.5;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #8c8c8c;
        padding:65px;
        border-radius:65px;

     } 

     .l4 {
        opacity: 0.5;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #858585;
        padding:90px;
        border-radius:90px;

     } 

     .l5 {
        opacity: 0.5;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #808080;
        padding:130px;
        border-radius:130px;

     } 

     .l6 {
        opacity: 0.6;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #737373;
        padding:170px;
        border-radius:170px;

     } 

     .l7 {
        opacity: 0.7;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #666666;
        padding:210px;
        border-radius:210px;

     }
     
     .l8 {
        opacity: 0.8;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #666666;
        padding:260px;
        border-radius:260px;

     } 


     
=======
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

