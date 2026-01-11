import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div >
        <Link className="title" to="/">My Music App</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/allsongs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            All Songs
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/playlists"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Playlists
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/music"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Music Player
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
