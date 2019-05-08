import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid black;
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 10px 20px;
    border-right:1px solid black;
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  @media(max-width:360px){
    grid-template-columns: repeat(2, auto);
    .next{border-top:1px solid black;}
  }
`;

export default PaginationStyles;