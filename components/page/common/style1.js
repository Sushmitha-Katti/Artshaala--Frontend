import styled from "styled-components";
import instrument from './instruments.png';


const Styling = styled.div`

    html,body{
        margin:0;
        padding:0;
    }
    .main {
        height: 500px;
        overflow: scroll;
        
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
        height: 90%;
         background:#fffcff;
         opacity: 0.6;
        //min-width: 1240px;
        margin:0 auto;
        padding:0px 0px 0px 0px; 
        position:fixed;
      
       
    }

    .b1 {
       
        opacity: 1.0;
        
        display:inline-block;
        position: fixed;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
        

    }


    .line1 {
        padding:0;
        margin:0 auto;
        color:#FBBD1D;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size:2vmin;
   
        
    }
  
    .line2 {
        padding:0;
        margin:0 auto;
        font-size:5vmin;
        font-family:courier-prime, monospace;
        font-style: normal;
        font-weight: 400;

        
    }

    .line3 {
        padding:0;
        margin:0 auto;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size:3vmin;
        width:400px;
        display:inline-block;
    }
    .line4 {
        padding:15px 60px 15px;
        color:white;
        margin:15px auto;
        border:0px;
        display:inline-block;
        background-color:#FBBD1D;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 700;
    }

    .l {
        box-sizing: border-box;
    }
     
    .l1 {
        opacity: 0.5;
        background-color:white;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 60%;
        left: 50%;
        transform: translate(-51%, -45%);
        border: 1px solid #8c8c8c;
        padding:2vw;
        border-radius:60px;

     } 

     .l2 {
        opacity: 0.3;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #8c8c8c;
        padding:3vw;
        border-radius:60px;

     } 

     .l3 {
        opacity: 0.5;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #8c8c8c;
        padding:4vw;
        border-radius:65px;

     } 

     .l4 {
        opacity: 0.5;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #858585;
        padding:6vw;
        border-radius:110px;

     } 

     .l5 {
        opacity: 0.5;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #808080;
        padding:8vw;
        border-radius:150px;

     } 

     .l6 {
        opacity: 0.6;
        position: relative;
        display:inline-block;
        position: fixed;
        top:60%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #737373;
        padding:10vw;
        border-radius:170px;

     } 

     .l7 {
        opacity: 0.7;
        position: relative;
        display:inline-block;
        position: fixed;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #666666;
        padding:13vw;
        border-radius:200px;

     }
     
    //  .l8 {
    //     opacity: 0.8;
    //     position: relative;
    //     display:inline-block;
    //     position: fixed;
    //     top: 60%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     border: 1px solid #666666;
    //     padding:260;
    //     border-radius:260px;

    //  } 


     
`;
export { Styling };

