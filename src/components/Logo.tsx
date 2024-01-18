import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="fixed top-0 left-0 w-[250px] h-[130px] text-center">
      <Link className="inline-block w-[90px] h-[100px] mx-auto" to="/">
        <img src="images/hogwarts-logo.png" alt="Logo" className="" />
      </Link>
    </div>
  );
};

export default Logo;
