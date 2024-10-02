import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const BlogPage = async () => {

    const data = await fetch("http://localhost:3002/blogs");
    const blogs = await data.json();

   

  return (
    <div>
        <LatestBlogs blogs={blogs}/>
    </div>
  );
};

export default BlogPage;