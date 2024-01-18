import { FC } from "react";
import { NavLink } from "react-router-dom";

interface INavItemProps {
  icon: string;
  label: string;
  path: string;
}
const NavItem: FC<INavItemProps> = ({ icon, label, path }) => {
  const defaultClass =
    "flex flex-col items-center space-y-1 cursor-pointer hover:drop-shadow-[0_0_10px_rgb(202,190,33)]";
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${defaultClass} border-b border-[#cabe21]`
          : `${defaultClass} text-white`
      }
    >
      <img className="w-8 h-8 inset-0" src={`images/${icon}`} alt={label} />
      <span className="font-bold text-md">{label}</span>
    </NavLink>
  );
};

export default NavItem;
