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
top:-0.4rem;
left:1rem;
border:1px solid #f7bbef;
background:#f7bb2f;
padding: 1px 4px;
font-weight:bold;




 

 
  
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