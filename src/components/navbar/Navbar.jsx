import ListNavbar from "./components/ListNavbar";
import Logo from "./components/Logo";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <nav>
          <div><Logo /></div>
          <div><ListNavbar /></div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;