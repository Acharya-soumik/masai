// HomePage.tsx
import Navbar from "../Components/Navbar";
import PostList from "../Components/PostList";

const HomePage: React.FC = () => {
  return (
    <div className="page">
      <Navbar pageName="Home" />
      <PostList />
    </div>
  );
};

export default HomePage;
