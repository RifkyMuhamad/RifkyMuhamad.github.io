import { Link } from "react-router-dom";
import ListNavbar from "./components/ListNavbar";
import Logo from "./components/Logo";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <nav>
          <div>
            <Logo />
          </div>

          <div>
            <ListNavbar />
          </div>
          
          <div>
            <Link to={`https://rifkymuhamad.github.io/dyonestrankers/`}>DYONE_STRANKERS</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;