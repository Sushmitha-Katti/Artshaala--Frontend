import Styled from "styled-components";

const AboutStyle = Styled.nav`

    font-family:"Monsterrat",sans-serif;
    .main{
        text-align:center;
    }

   .title {
    display: grid;
    justify-content: space-around;
    padding: 0;
    margin: 1rem 3rem;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 0rem;
    justify-items: center;

  }
  .line {
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid black;
    margin: 0;
    padding: 0;
    justify-content:center;
  }
  .heading{
      color:#F7BB2F;
      font-size:30px;
      justify-content:center;
    
  }
    .para{
        text-align:justify;
        margin:0 5rem ;
        font-size:20px;
        height: auto;
    }
    .enquiry{
        background-color:#F7BB2F;
        border:solid 1px #F7BB2F;
        border-radius:3%;
        padding:12px 25px;
        font-size:20px;
        text-decoration:none;
        color:white;
        display:block;
        margin:auto;
        width:7rem;
    }
    .enquiry:hover{
        color:black;
    }

    @media only screen and (max-width: 480px){
        .para {
            text-align:justify;
            margin:0 2rem ;
            font-size:20px;
        }
    }

`;

export default AboutStyle;
