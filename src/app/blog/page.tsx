import BlogCard from "@/component/BlogCard";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) throw new Error("Something went wrong!");

  return res.json();
};

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1>Blogs:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-10">
        <BlogCard href="/blog/123" desctiption="lorem ipsum descriptionlorem ipsum descriptionlorem ipsum descriptionlorem ipsum descriptionlorem ipsum description" title="BLog Title" image="https://images.pexels.com/photos/19855379/pexels-photo-19855379/free-photo-of-a-yellow-fiat-car-parked-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
        {posts.map((post: IPost) => {
          return (
            <div key={post.id}>
              <BlogCard
                href={`${post.id}`}
                desctiption={post.body}
                title={post.title}
                image="https://images.pexels.com/photos/19855379/pexels-photo-19855379/free-photo-of-a-yellow-fiat-car-parked-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BlogPage;
