import styled from 'styled-components';

const FilterMobileStyle = styled.nav`

    button{
        background-color:white;
        border:0;
    }
    .main,.sub{
        padding-top:30px;
        padding-bottom:10px;

    }

    .main{
        background-color:#FBBD1D;
        padding-bottom:30px;
    }

    .sub{
        border-bottom: 0.6px solid #d9d9d9; 
    }

    .filterbuttons{
        float:right;
        font-size:30px;
        margin-right:20px;
    }
    .filternames{
        font-size: 30px;
        margin-left:20px;
    }

    .returnbutton{
        font-size:30px;
        margin-left:20px;
        background-color:#FBBD1D;
    }
    .filtertext{
        font-size:30px;
        margin-left:20px;
    }


//CategoryList.js DESIGN:

    .category{
        background-color:#FBBD1D;
        padding:30px;
        font-size:30px;
    }
    .cbutton{
        font-size:30px;
        background-color:#FBBD1D;
        margin-right:20px;
    }
    .categoryitems{
        list-style:none;
        font-size:30px;
        padding-top: 30px;
        padding-bottom:10px;
        margin-left:20px;
        border-bottom: 0.6px solid #d9d9d9; 
    }
    .categorylist{
        list-style:none;
        text-decoration:none;
        padding:0;
    }

// brand.js DESIGN

.brand{
    font-size:30px;
    background-color:#FBBD1D;
    padding:30px;
}
.icon{
    background-color:#FBBD1D;
    font-size:30px;
    margin-right:20px;
}
.list{
    list-style:none;
    padding:0;
}
.items{
    padding-top:30px;
    padding-bottom:40px;
    margin-left:20px;
    margin-right:20px;
    border-bottom: 0.6px solid #d9d9d9; 
}
.texts{
    float:left;
    list-style:none;
    font-size:30px;
}

#checkboxes{
    float:right;
    width:20px;
    height:20px;
}



`;

export default FilterMobileStyle