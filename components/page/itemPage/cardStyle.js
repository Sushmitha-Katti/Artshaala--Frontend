import styled from "styled-components";

const Cardstyle = styled.nav`
    .main{
        padding:0px;
       border:0.6px solid #b3b3b3;
        width:200px;
        text-align:center;
        
    }
    .sub{
        text-align:left;
        margin-left:15px;
        font-size:15px;
        width: 185px;
         height: 350px;
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
        margin:6px;
        
    }
    .cost{
        padding:0;
        margin:-6px 2px 2px 2px;
        color:red;
        
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
    @media only screen and (max-width: 900px) {
        .main{
           // width:150px;
        }
    }

    @media only screen and (max-width: 480px) {
        .main{
            margin-top:20px;
        }
    }
`;

export default Cardstyle;

