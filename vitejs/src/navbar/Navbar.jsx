import { Link } from "react-router-dom";
import Search from "./components/Search";
import { IoIosMenu } from "react-icons/io";
import Logo from "./components/Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex fixed bg-opacity-50 justify-between top-0 right-0 left-0 m-0 z-[9999] items-center px-[5rem] py-[1%] bg-white">
        <Logo/>
        <div className="bg-slate-300 w-1/2">
          <ul className="flex justify-between">
            <li>
              <Link to={"https://rifkymuhamad.github.io/article"}>Article</Link>
            </li>
            <li>
              <Link to={"https://rifkymuhamad.github.io/project"}>Project</Link>
            </li>
            <li>
              <Link to={"https://rifkymuhamad.github.io/contact"}>Contact</Link>
            </li>
            <li>
              <Search/>
            </li>
            <li>
              <a href="#"><IoIosMenu /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
