import styled from "styled-components";

const SortStyle = styled.nav`

    .multi-level{
        margin-top:20px;

        width:180px;
    }

    .item{
        padding:1vw;
        margin:0;
    }
    #menu{
        display:none;
    }
    .menuLabel{
        display:none;
    }
    .menuLabel span{
        
    }

    .item ul,.multi-level input[type="checkbox"]{
        display:none;
    }
    .multi-level:checked, .item input:checked ~ ul{
        display:block;
        
    }

    input#checkboxes{
        display: block;
        float:left;
        position:absolute;
        
    }
    

    .li-tag{
        margin:0;
        list-style:none;
        text-decoration:none;
    }
    .ul-tag{
        margin:0;
        padding:1vw 0 1vw 0;
    }

    span{
        color:black;
        font-size:14px;
        margin-left:20px;
    }

    .headings{
        font-size:16px;
        margin:0;
    }

    .categories{
        margin:0;
    }
    label{
        
        cursor:pointer;
        float:right;
       
    }


    a{
        text-decoration:none;
        color:black;
    }

    hr{
        width:160px;
        margin:0;
    }
    .center{
        display:none;
    }

    @media (max-width:750px){

        .main{
            display:none;
        }
        .center{
            display:block;
            text-align:center;
            border-bottom: 0.6px solid #d9d9d9;
            padding-bottom:10px;
        }

        .filterbutton{
            font-size:20px;
            background-color:white;
            border:0;
            padding:0;
        }
    }





`;

export default SortStyle;
