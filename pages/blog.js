import Blog from '../components/Blogs/Blog';

const blog = ({ query }) => (
  <div>
    <Blog id={query.id} />
  </div>
)

export default blog;