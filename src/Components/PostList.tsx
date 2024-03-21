// PostList.tsx
import { useEffect, useState } from "react";
import { getPosts } from "../api";
import PostCard from "./PostCard";

interface Post {
  id: number;
  name: string;
  author: string;
  image: string;
  content: string;
  category: string;
  like: number;
  dislike: number;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div data-testid="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
};

export default PostList;
