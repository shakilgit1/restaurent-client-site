import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Pizzan | Blog</title>
      </Helmet>
      <h2 className="text-xl text-center">Blog page</h2>
    </div>
  );
};

export default Blog;
