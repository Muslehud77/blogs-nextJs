import { TBlog } from "@/app/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";



type TBlogs = {
  blogs: TBlog[]
}

const LatestBlogs = ({blogs}:TBlogs) => {


  console.log(blogs);

  return (
    <div className="w-[90%] mx-auto">
     <h1 className="text-4xl text-center my-5">Latest Blogs from <span className="text-accent">
      Blogiz</span>
      </h1>
      <p className="text-center w-2/4 mx-auto text-xl italic text-gray-400">
        Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.
      </p>
      <div className="grid grid-cols-2 gap-4 my-4">
        {
          blogs.slice(0,2).map(blog=><LatestBlogCard blog={blog} key={blog.id}/>)
        }
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        {
          blogs.slice(2,5).map(blog=><BlogCard blog={blog} key={blog.id}/>)
        }
      </div>
    </div>
  );
};

export default LatestBlogs;