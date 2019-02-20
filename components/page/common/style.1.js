import styled from "styled-components";
import instrument from './instruments.png';

// const Heading = styled.div`
//     font-size: 10rem;
//     background:#ccc;
// `;


const Heading = styled.div`

.bgimg {
    background-image:url(${instrument});
    height: 100%; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 1240px;
}

.bg {
    width: 100%;
    height: 650px;
    background:#f2f2f2;
    opacity: 0.5;
    min-width: 1240px;
}

.b1 {
    height:100%;
    opacity: 1.0;
    position: relative;
    top: -100px;
    min-width: 1240px;
   
    
}
`;
export default Heading;

