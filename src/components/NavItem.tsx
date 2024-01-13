import { NavLink } from "react-router-dom";

const NavItem = ({ label, path }) => {
  const defaultClass = "text-zinc-200 hover:text-zinc-300";
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "text-rose-600" : "text-white")}
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
