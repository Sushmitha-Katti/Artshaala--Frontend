import styled,{ keyframes }  from "styled-components";

const spin = keyframes`
0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Loader = styled.div`


    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #f7bb2f;
    width: 120px;
    height: 120px;
    -webkit-animation: ${spin} 2s linear infinite; /* Safari */
    animation: ${spin} 2s linear infinite;
  
`;
const Cardstyle = styled.nav`
    .main{
        padding:0px;
        border:0.6px solid #b3b3b3;
        width:250px;
        text-align:center;
        border-radius: 5px;
        /* box-shadow: 0 0 10px 3px rgba(0,0,0,0.5); */
        
    }
 



    .sub{
        text-align:left;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:15px;
        font-size:15px;
        width: 185px;
         /* height: 400px; */
       p{
           margin:2px 0;
       }
    }
    .off{
        margin:15px 130px 0;
        position:absolute;
        height:18px;
        width:63px;
        font-size:12px;
        background-color:#FBBD1D;
        border:1px solid #FBBD1D;
        border-radius:6px;
    }
    .pic{
        width:150px;
        height:210px;
        cursor:pointer;
       
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom:15px;
        margin-top:5px;
 
        
    }
    .cost{
        padding:0;
        margin:-6px 2px 2px 2px;
     
    }
    .descrip{
        margin-top:5px;
        margin-bottom:5px;
        margin-right:5px;
        cursor:pointer;
    }
    .review{
        padding:0;
        margin-top:0;
        color:#6cddfc;
    }
    .stars{
        margin-left:10px;
        color:#FBBD1D;
       
    }
    .updatebtn{
        text-decoration:none;
        color:black;
    }
    /* @media only screen and (max-width: 900px) {
        .main{
            width:150px;
        }
    } */

    @media only screen and (max-width: 480px) {
        .main{
            margin-top:20px;
        }
    }
    /* @media only screen and (max-width: 300px) {
        .main{
            width:100px;
        }
        .sub{
            width:80px;
        }
    } */
`;

export default Cardstyle;
export {Loader};

