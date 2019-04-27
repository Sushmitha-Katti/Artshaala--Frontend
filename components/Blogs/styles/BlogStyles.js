import Styles from 'styled-components';

const DeleteBlogWraper = Styles.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 3fr 1fr;
  border: 0px solid black;
  border-radius: 10px;
  padding: 5px;
  margin: 10px
  background: rgba(50, 50, 50, 0.2);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  p {
    display: inline;
    color: black;
  }

  button {
    display: inline;
    border: 0px;
    border-radius: 10px;
    background: rgba(50, 50, 0, 0.1);
    outline: none; 
    &:hover {
      background: rgba(250, 250, 50, 0.1);
    }
  }
`;

const BlogPageStyle = Styles.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const MainBlogStyle = Styles.div`
  display: inline-block;
  text-align: justify;
  padding: 2em;
  .image {
    display: block;
    margin: auto
  }
`;

const SidePannel = Styles.div`
  display: inline-block;
  text-align: justify
  padding: 2em;
`;

const BlogHeaders = Styles.div`
  display: inline-block;
  text-align: center;
  
  &:nth-child(odd) {
    display: block;
    background:rgba(65, 89, 33, 0.2);
    color: black;
    margin: auto;
    margin-top: 10px;
    padding: 6px;
    padding-left: 10px
    border-radius: 10px 10px 0 0;
    text-align: left;
    border-left: 5px solid rgba(65, 89, 33, 0.8);
    font-size: 26px;
    font-family: Futura, Arial, sans-serif;
    font-weight: bold;
  }
  &:nth-child(even) {
    display: block;
    background:rgba(129, 174, 247, 0.2);
    color: brown;
    padding: 6px;
    padding-left: 10px
    margin: auto;
    margin-bottom: 4px;
    border-radius: 0 0 10px 10px;
    text-align: left;
    border-left: 5px solid rgba(129, 174, 247, 0.8);
    font-family: Futura, Arial, sans-serif;
    font-size: 18px;
  }
`;

const BlogsStyles = Styles.div`
  dispaly: block;
  width: 99%;
  height: auto;
  background:rgba(129, 174, 247, 0.1);
  border-radius: 15px 5px;
  padding: 10px;
  margin: auto;
  margin-top: 10px;
  margin-right: 3px;
  text-align: center;
  h1 {
    font-size: 50px;
    font-weight: bold;
    font-family: Rockwell;
  }
  .image {
    display: block;
  }
  button {
    width: 100px;
    height: 30px;
    display: block;
    margin: auto;
    margin-top: 10px;
    background: rgba(105, 105, 241, 0.5);
    border-radius: 5px;
    border: 0px;
  }
`;

export { DeleteBlogWraper, BlogPageStyle, BlogHeaders, BlogsStyles, MainBlogStyle, SidePannel }