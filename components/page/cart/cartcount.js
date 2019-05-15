import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';



const Dot = styled.div`
  
color: black;
border-radius: 50%;
margin:0.1rem 0.5rem;
margin-left:0.6rem;
position:absolute;
margin-bottom: 15px;
top:0.3rem;
left:0.7rem;




 

 
  
  font-feature-settings: 'tnum';
  font-variant-numeric: 'tabular-nums';
`;

const CartCount = ({ count }) => (
  
        <Dot>{count}</Dot>
  
);

CartCount.propTypes = {
  count: PropTypes.number.isRequired,
};
export default CartCount;