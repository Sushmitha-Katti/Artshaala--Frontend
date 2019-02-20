import styled from "styled-components";
import instrument from './instruments.png';


const Heading = styled.div`

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

    // @media (max-width:450px){
    //     .b1 {
    //         top:20%;
    //     }

    // }
    // @media (min-width:451px) and (max-width:750px) {
    //     .b1 {
    //         top:40%;
    //         background:red;
    //     }

    // }


    @media (min-width:751px) and (max-width:900px) {
        .bgimg {
            width:30%;
            height:30%;
            background:red;
        }
        .bg {
            width:30%;
            height:30%;
            background:red;
        }

    }

    // @media (min-width:850px) and (max-width:1200px) {
    //     .b1 {
    //         top:40%;
    //         position:absolute;
    //         background:green;
    //     }
    //     .line2{
    //         font-size:50px;
    //     }

    // }

     
`;
export default Heading;

