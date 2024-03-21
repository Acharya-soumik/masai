import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPost from "./AppPost";
import HomePage from "./HomePage";

interface Route {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

const routes: Route[] = [
  { path: "/", component: HomePage },
  { path: "/add-post", component: AddPost },
];

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default MainRoutes;
