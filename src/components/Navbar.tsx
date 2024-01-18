import NavItem from "./NavItem";
import Logo from "./Logo";

const Links = [
  {
    icon: "home-icon.svg",
    label: "Home",
    path: "/home",
  },
  {
    icon: "student-icon.svg",
    label: "Schedule",
    path: "/schedule",
  },
];

export default function Navbar() {
  return (
    <nav className="px-8 py-6  text-white relative">
      <Logo />
      <div className="flex justify-end mr-16 gap-12">
        {Links.map((link) => (
          <NavItem key={link.label} {...link} />
        ))}
      </div>
    </nav>
  );
}
