import styled from "styled-components";
import instrument from './instruments1.png';


const Styling = styled.div`


    .main {
        // background: #ffffffcc;
        background-image:url(${instrument});
        background-size:100%;
        background-position: center;
        background-repeat: no-repeat;
        font-size:15px;
        padding-top:20vw;
        padding-bottom:20vw;
        text-align: center;

    }

    .words {
       
        margin-top:-2vh;
        margin-left:5vw;
        display:inline-block;
        position:relative;
       
    }

    .line1 {
        padding:0;
        margin:2px auto;
        color:#FBBD1D;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size:2.5vmin;
        width: fit-content; 
        background: #ffffffcc;      
    }
  
    .line2 {
        padding:0;
        margin:2px auto;
        font-size:5vmin;
        font-family:courier-prime, monospace;
        font-style: normal;
        font-weight: 400; 
        width: fit-content; 
        background: #ffffffcc; 
    }

    .line3 {
        display:inline-block;
        padding:0;
        margin:2px auto;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size:3vmin;
        width: fit-content;
        background: #ffffffcc;
        
    }
    .line4 {
        display:inline-block;
        padding:1vw 3vw 1vw 3vw; 
        margin:15px auto;
        border:0px;
        background-color:#FBBD1D;
        font-family: myriad-pro, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size:2vmin;
        color:white;
        cursor: pointer;
        width: fit-content;
        
    }

    .l1 {
        display:inline-block;
        position: absolute;
        padding:2vw;
        border: 1px solid #8c8c8c;
        border-radius:700px;
        opacity:0.2;
    } 

    .l2 {
        position:absolute;
        display:inline-block;
        padding:3vw;
        margin:-1vw;
        border: 1px solid #8c8c8c;
        border-radius:60px;
        opacity: 0.3;

    } 

    .l3 {
        position:absolute;
        display:inline-block;
        margin:-2vw;
        padding:4vw;
        border: 1px solid #8c8c8c;
        border-radius:65px;
        opacity: 0.5;
    } 

    .l4 {
        position:absolute;
        display:inline-block;
        margin:-4vw;
        padding:6vw;
        border: 1px solid #858585;
        border-radius:110px;
        opacity: 0.5;
    } 

    .l5 {     
        position:absolute;
        display:inline-block;
        margin:-6vw;
        padding:8vw;
        border: 1px solid #808080;       
        border-radius:150px;
        opacity: 0.5;
    } 

    .l6 {
        position:absolute;
        display:inline-block;
        margin:-8vw;
        padding:10vw;
        border: 1px solid #737373;       
        border-radius:170px;
        opacity: 0.6;
    } 

    .l7 {    
        position:absolute;
        display:inline-block;
        margin:-11vw;
        padding:13vw;
        border: 1px solid #666666;  
        border-radius:200px;
        opacity: 0.7;
    }


    @media (max-width:600px){
        .line1{
            font-size:3vw;
        }
        .line2{
            font-size:5vw;
        }
        .line3{
            font-size:4vw;
        }
        .line4{
            font-size:4vw;
            padding:2vw 4vw 2vw 4vw; 
        }

        .l1 {
            display:inline-block;
            position: absolute;
            padding:2vw;
            margin:0.6vw
            border: 1px solid #8c8c8c;
            border-radius:700px;
            opacity:0.2;
        } 
    
        .l2 {
            position:absolute;
            display:inline-block;
            padding:4vw;
            margin:-1.2vw;
            border: 1px solid #8c8c8c;
            border-radius:60px;
            opacity: 0.3;
    
        } 
    
        .l3 {
            position:absolute;
            display:inline-block;
            margin:-3vw;
            padding:6vw;
            border: 1px solid #8c8c8c;
            border-radius:65px;
            opacity: 0.5;
        } 
    
        .l4 {
            position:absolute;
            display:inline-block;
            margin:-6vw;
            padding:9vw;
            border: 1px solid #858585;
            border-radius:110px;
            opacity: 0.5;
        } 
    
        .l5 {     
            position:absolute;
            display:inline-block;
            margin:-9vw;
            padding:12vw;
            border: 1px solid #808080;       
            border-radius:150px;
            opacity: 0.5;
        } 
    
        .l6 {
            position:absolute;
            display:inline-block;
            margin:-12vw;
            padding:15vw;
            border: 1px solid #737373;       
            border-radius:170px;
            opacity: 0.6;
        } 
    
        .l7 {    
            position:absolute;
            display:inline-block;
            margin:-17vw;
            padding:20vw;
            border: 1px solid #666666;  
            border-radius:200px;
            opacity: 0.7;
        }
    
    }
        
`;

export { Styling };

