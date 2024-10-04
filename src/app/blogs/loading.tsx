import LoadingCard from "@/components/ui/LoadingCard";
import { TBlog } from "../types";


const BlogLoading = async () => {
    const res = await fetch(`http://localhost:3002/blogs`);
    const data = await res.json();
  
  return (
    <div>
   <div>
    {
        data.map((blog:TBlog)=><LoadingCard key={blog.id}/>)
    }
   </div>
    </div>
  );
};

export default BlogLoading;