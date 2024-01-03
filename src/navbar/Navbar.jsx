import ListNavbar from "./components/ListNavbar";
import Logo from "./components/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <nav>
          <div><Logo /></div>
          <div><ListNavbar /></div>
          <div><a href="https://rifkymuhamad.github.io/dyonestrankers/">DYONE_STRANKERS</a></div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;