import ListNavbar from "./components/ListNavbar";
import Logo from "./components/Logo";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>

          <div>
            <Logo />
          </div>

          <div>
            <ListNavbar />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;