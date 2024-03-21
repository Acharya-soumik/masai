// PostCard.tsx
import { updatePostLikes, deletePost } from "../api";
import styles from "./PostCard.module.css";

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

interface PostCardProps<T extends Post> {
  post: T;
  setPosts: React.Dispatch<React.SetStateAction<T[]>>;
  // Include any other props as needed
}

const PostCard = <T extends Post>({ post, setPosts }: PostCardProps<T>) => {
  const handleLike = async () => {
    const updatedPost = await updatePostLikes(post.id, { like: post.like + 1 });
    setPosts((prevPosts: Post[]) =>
      prevPosts.map((p) => (p.id === post.id ? updatedPost.data : p))
    );
  };

  const handleDislike = async () => {
    const updatedPost = await updatePostLikes(post.id, {
      dislike: post.dislike + 1,
    });
    setPosts((prevPosts: Post[]) =>
      prevPosts.map((p) => (p.id === post.id ? updatedPost.data : p))
    );
  };

  const handleDelete = async () => {
    await deletePost(post.id);
    setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id));
  };

  return (
    <div className={styles.postCard}>
      <img src={post.image} alt={post.name} className={styles.postImage} />
      <h4 className={styles.postName}>{post.name}</h4>
      <p className={styles.postName}>Author : {post.author}</p>
      <p className={styles.postName}>{post.content}</p>
      <p className="post-category">Category: {post.category}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
        <div>
          <button data-testid="like-button" onClick={handleLike}>
            Like
          </button>
          <span className="post-like">{post.like}</span>
        </div>
        <div>
          <button data-testid="dislike-button" onClick={handleDislike}>
            Dislike
          </button>
          <span className="post-dislike">{post.dislike}</span>
        </div>
        <button
          style={{
            backgroundColor: "red",
          }}
          data-testid="delete-button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default PostCard;
