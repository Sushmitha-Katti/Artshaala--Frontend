import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';



const Dot = styled.div`
  
color: black;
border-radius: 50%;
margin:0;
margin-left:1px;



 

 
  
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