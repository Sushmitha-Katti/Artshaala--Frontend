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
  /* padding: 1rem; */
  transition: all 0.2s;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  color: ${props => (props.highlighted ? 'white' : 'black')};
  display: flex;
  align-items: center;
  /* border-left: 10px solid ${props => (props.highlighted ? props.theme.lightgrey : 'white')}; */

`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }
  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 90%;
    padding: 10px;
    margin:5px 0 0 25px;
    
    border:white;
    border-radius:2%;
    /* font-size: 1.5rem; */
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };