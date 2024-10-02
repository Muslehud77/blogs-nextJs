import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async () => {
    const data = await fetch("http://localhost:3002/blogs",{
      next:{
        revalidate:30
      }
    });
    const blogs = await data.json();

  return (
    <div>
      <LatestBlogs blogs={blogs} />
    </div>
  );
};

export default HomePage;
