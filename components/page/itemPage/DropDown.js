import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
 
 
  margin:5px 0 0 25px;
  /* margin-left:6rem; */
  position:absolute;
  left:0%;
  
  
  /* margin-left:16.5vw; */
  z-index: 200;
  display:block;
  
  @media(min-width:100px){
    left:17%;
  }

  @media(max-width:950px){
    left:27%;
  }
  @media(max-width:850px){
    left:27.3%;
  }

  @media(max-width:750px){
    left:28%;
  }
  @media(max-width:650px){
    left:33%;
  }
`;

const DropDownItem = styled.div`
 
  background: ${props => (props.highlighted ? '#ff9900' : 'white')};
   padding: 5px; 
  transition: all 0.2s;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  color: ${props => (props.highlighted ? 'white' : 'black')};
  display: flex;
  align-items: center;
  
  /* border-left: 10px solid ${props => (props.highlighted ? props.theme.lightgrey : 'white')}; */

`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px orange;
  }
  to {
    box-shadow: 0 0 5px 1px orange;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 90%;
    padding: 15px ;
    margin:5px 0 0 25px;
    border:white;
    border-radius:20px;
   
    /* font-size: 1.5rem; */
    
  }
  input:focus{
    outline:none;
  }
  .searchbar{
    width: 80%;
    display:flex;
    background-color:white;
    margin-left: 6rem;
    margin-right:2rem;
    border-radius:50px;
    height:50px;
    
    justify-content:center;
      align-items:center;
      box-sizing: border-box;
      .searchicon{
        color:white;
        background: #f7bb2f;
        padding:15px;
        border-radius:50%;

        
      }

    
  }
`;

export { DropDown, DropDownItem, SearchStyles };