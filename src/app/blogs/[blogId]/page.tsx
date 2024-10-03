import { TBlog } from "@/app/types";
import BlogDetails from "@/components/ui/BlogDetails";

type pageProps = {
  params: { blogId: string };
};

export const generateStaticParams = async () => {
  const data = await fetch(`http://localhost:3002/blogs`);

  const blogs = (await data.json()) as unknown as TBlog[];

  return blogs.slice(0, 3).map((blog) => ({
    blogId: blog.id.toString(),
  }));
};

const BlogDetailsPage = async ({ params }: pageProps) => {
  const { blogId } = params;

  const data = await fetch(`http://localhost:3002/blogs/${blogId}`, {
    cache: "no-store",
  });

  const blog = (await data.json()) as unknown as TBlog;

  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
