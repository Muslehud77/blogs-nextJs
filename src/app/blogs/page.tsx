
const BlogPage = async () => {

    const data = await fetch("http://localhost:3002/blogs");
    const blogs = await data.json()

    console.log(blogs);

  return (
    <div>
     <h1>This is page</h1>
    </div>
  );
};

export default BlogPage;