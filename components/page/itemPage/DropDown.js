import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 60%;
  left:24.5%;
  z-index: 200;
  display:block;
  
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
    width: 60%;
    padding: 10px;
    margin:5px 0 0 25px;
    border: 1px solid black;
    /* font-size: 1.5rem; */
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };