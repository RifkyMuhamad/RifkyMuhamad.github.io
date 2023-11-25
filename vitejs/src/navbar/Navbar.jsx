import { Link } from "react-router-dom";
import Search from "./components/Search";
import { IoIosMenu } from "react-icons/io";
import Logo from "./components/Logo";

const Navbar = () => {
  return (
    <header className="box-border container">
      <nav className="m-0 items-center justify-between flex bg-opacity-10 top-0 bg-white right-0 left-0 z-[9999] fixed px-[2em] py-[1%]">
        <div className="xsm:w-1/2 lg: w-1/6 flex">
          <Logo />
        </div>
        <div className="text-white">
          <h1 className="xsm:block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">XSM</h1>
          <h1 className="xsm:hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">SM</h1>
          <h1 className="xsm:hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden 3xl:hidden">MD</h1>
          <h1 className="xsm:hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden 3xl:hidden">LG</h1>
          <h1 className="xsm:hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden 3xl:hidden">XL</h1>
          <h1 className="xsm:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block 3xl:hidden">2XL</h1>
          <h1 className="xsm:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:block">3XL</h1>
        </div>
        <div className="bg-slate-900">
          <ul className="justify-center flex gap-3">
            <li className="xsm:hidden sm:hidden md:block lg:block 2xl:block">
              <Link to={"https://rifkymuhamad.github.io/article"}>Article</Link>
            </li>
            <li className="xsm:hidden sm:hidden md:block lg:block 2xl:block">
              <Link to={"https://rifkymuhamad.github.io/project"}>Project</Link>
            </li>
            <li className="xsm:hidden sm:hidden md:block lg:block 2xl:block">
              <Link to={"https://rifkymuhamad.github.io/contact"}>Contact</Link>
            </li>
            <li className="xsm:hidden sm:block md:block lg:block 2xl:block">
              <Search />
            </li>
            <li className="xsm: sm:block md:hidden lg:hidden 2xl:hidden">
              <a href="#">
                <IoIosMenu />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;