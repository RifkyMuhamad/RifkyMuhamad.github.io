import Logo from "./components/Logo";
import ListNavbar from "./components/ListNavbar";
// import MediaQuery from "./components/MediaQuery";
import SearchAndHamburger from "./components/SearchAndHamburger";
// import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="">
      <header className="">
        <nav className="">

          <div className="">
            <Logo />
          </div>

          <div className="">
            <ListNavbar />
          </div>

          <div className="">
            <SearchAndHamburger/>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;