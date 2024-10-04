"use client"
import BlogCard from "@/components/ui/BlogCard";
import { TBlog } from "../types";
import { useGetBlogsQuery } from "@/redux/api/baseApi";

const BlogPage =  () => {
 

  const {data:blogs,isLoading,isError} = useGetBlogsQuery(undefined)

  

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        All Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center w-2/4 mx-auto text-xl italic text-gray-400">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs?.map((blog: TBlog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
