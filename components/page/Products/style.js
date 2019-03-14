import sc from 'styled-components';


const Body = sc.body`

.main{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-auto-flow: column;
    grid-template-areas: 'gallery description';
  h3{
    font: 2.2em "Fira Sans", sans-serif;
  }
  p{
    font: 1.2em "Fira Sans", sans-serif;
  }
  .mon{
    font: 2em "Fira Sans", sans-serif;
}
.mon-num{
    font: 2em "Fira Sans", sans-serif;
    color:#3498db;
}
.myButton{
    background-color:#F7BB2F;
	// -moz-border-radius:30px;
	// -webkit-border-radius:30px;
	// border-radius:30px;
	border:2px solid #000000;
	display:inline-block;
	cursor:pointer;
	color:black;
	font-family:Verdana;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
.myButton:hover {
	background-color:#f7cb2f;
}
.myButton:active {
	position:relative;
	top:1px;
}

}
.gallery{
    grid-area:gallery;
}
.description{
    grid-area:description;
    justify-items:center;
}
.specs{
    display:grid;
    grid-template-rows:1fr;
    grid-auto-flow:row;
    grid-template-areas:'specs';
    justify-items:left;
    padding-left:50px;
}
  h2{
    padding-top:100px;
    padding-left:38px;
    color:#f39c12;
    font: 2.2em "Fira Sans", sans-serif;
  }
  li{
    font: 1.5rem "Fira Sans", sans-serif;
    list-style-type: none;
  }
}
`;

export default Body ;