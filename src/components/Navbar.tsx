import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const Links = [
  {
    label: "Home",

    path: "/home",
  },
  {
    label: "Schedule Today",
    path: "/schedule",
  },
];

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center gap-2 justify-center p-4 bg-black  border-gray-200 border">
      <h3 className="text-4xl font-bold text-white">
        Hogwarts School of Witchcraft and Wizardry
      </h3>
      <div className="flex gap-4">
        {Links.map((link) => (
          <NavItem key={link.label} {...link} />
        ))}
      </div>
    </nav>
  );
}
