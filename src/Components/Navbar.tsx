// Navbar.tsx
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"; //
interface NavbarProps {
  pageName: string;
}

const Navbar = ({ pageName }: NavbarProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-post"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              Add Post
            </NavLink>
          </li>
          {/* You can add more nav items here */}
        </ul>
      </nav>
      <h3 data-testid="page-name">{pageName}</h3>
    </div>
  );
};
export default Navbar;
