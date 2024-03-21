// AddPost.tsx
import { useState } from "react";
import { addPost } from "../api";
import Navbar from "../Components/Navbar";
import styles from "./AddPost.module.css";

const AddPost: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    image: "",
    content: "",
    category: "",
    like: 0,
    dislike: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addPost(formData);
    // Reset form or redirect to homepage
    setFormData({
      name: "",
      author: "",
      image: "",
      content: "",
      category: "",
      like: 0,
      dislike: 0,
    });
  };

  return (
    <div className="page">
      <Navbar pageName="Add Post Page" />
      <h2>Add New Post</h2>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          placeholder="Post Name"
          type="text"
          id="name"
          name="name"
          className={styles.inputField}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          placeholder="Post Image"
          type="text"
          id="image"
          name="image"
          className={styles.inputField}
          value={formData.image}
          onChange={handleChange}
        />

        <input
          placeholder="Post Author"
          type="text"
          id="author"
          name="author"
          className={styles.inputField}
          value={formData.author}
          onChange={handleChange}
        />

        <textarea
          placeholder="Post Content"
          id="content"
          name="content"
          className={styles.inputField}
          value={formData.content}
          onChange={handleChange}
          rows={5}
        ></textarea>

        <select
          id="category"
          name="category"
          className={styles.selectField}
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
        </select>

        <button type="submit" className={styles.submitButton}>
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
