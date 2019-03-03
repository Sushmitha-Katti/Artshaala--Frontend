import styled from "styled-components";

const SortStyle = styled.nav`

:global(body){
        margin:0;
        padding:0;
    }
    .multi-level{
        margin-left:4vw;
        width:15vw;
        border-right:2px solid blue;
    }

    .item{
        padding:1vw;
        margin:0;
        

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
    

    li{
        margin:0;
        list-style:none;
        text-decoration:none;
    }
    ul{
        margin:0;
        padding:1vw 0 1vw 0;
    }

    span{
        color:black;
        font-size:1vw;
        margin-left:20px;
    }

    .headings{
        font-size:1.2vw;
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
        width:12vw;
        margin:0;
    }
`;

export default SortStyle;




// #accordian section .items{
//     display:none;
    
// }

// #accordian section:target .items{
//     display:block;
    
// }
