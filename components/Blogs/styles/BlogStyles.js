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
  grid-template-cloumns: 1fr;
  text-align: center;
  .image {
    display: block;
    height: auto;
    width: auto;
    margin: auto;
  }
`;

const BlogHeaders = Styles.div`
  display: block;
  width: 80%;
  text-align: center;
  &:nth-child(odd) {
    display: block;
    background:rgba(65, 89, 33, 0.5);
    color: black;
    margin: auto;
    margin-top: 4px;
    padding: 6px;
    padding-left: 10px
    border-radius: 10px 10px 0 0;
    text-align: left;
    border-left: 5px solid rgba(65, 89, 33, 0.8);
    font-size: 30px;
  }
  &:nth-child(even) {
    display: block;
    background:rgba(129, 174, 247, 0.5);
    color: brown;
    padding: 6px;
    padding-left: 10px
    margin: auto;
    margin-bottom: 4px;
    border-radius: 0 0 10px 10px;
    text-align: left;
    border-left: 5px solid rgba(129, 174, 247, 0.8);
  }
`;

const BlogsStyles = Styles.div`
  dispaly: block;
  width: 99%;
  height: auto;
  background:rgba(129, 174, 247, 0.3);
  border-radius: 15px 5px;
  padding: 10px;
  margin: auto;
  margin-top: 10px;
  margin-right: 3px;
  text-align: center;

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

export { DeleteBlogWraper, BlogPageStyle, BlogHeaders, BlogsStyles }