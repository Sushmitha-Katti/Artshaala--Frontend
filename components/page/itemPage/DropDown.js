import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
 
  width:90%;
  margin:5px 0 0 25px;
  
  
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
    border-radius:2%;
   
    /* font-size: 1.5rem; */
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
  input:focus{
    outline:none;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.10);
  
  }
  .searchbar{
    width: 90%;
    display:flex;
    background-color:white;
    border:white;
    border-radius:3%;
    margin:5px 0 0 25px;
    justify-content:center;
      align-items:center;
      box-sizing: border-box;
    .search{
    
      font-size: 1rem;
      padding:10px;
      
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };