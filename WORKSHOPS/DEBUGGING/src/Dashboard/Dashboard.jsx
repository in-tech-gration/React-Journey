import { useState, useEffect } from "react";
import Post from "./Post";

const postsURL = "http://localhost:3000/posts";

export default function Dashboard() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(postsURL)
      .then((res) => res.json() ) 
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  const postUtils = {
    countPosts(posts, limit){
      return posts.filter( post => post.views > limit );
    }
  }

  const highPosts = postUtils.countPosts(posts, 100);

  return (
    <div>
      <h1 className="font-bold text-4xl">Posts</h1>
      <p className="pb-4">Top posts: {highPosts.length}</p>
      <ul>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
      </ul>
    </div>
  );
}
