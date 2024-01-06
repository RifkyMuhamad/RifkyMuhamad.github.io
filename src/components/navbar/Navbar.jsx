import { useEffect, useState } from "react";
import { mainURL, navItemsURL } from "../../config/Url";
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [itemsNav, setItemsNav] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    axios
      .get(navItemsURL)
      .then((response) => {
        setItemsNav(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setItemsNav(["loading"]);
      });
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(itemsNav);

  return (
    <header className="w-full bg-amber-400 fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-amber-400 duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href={mainURL}
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <span className="text-[#263238]">
              {itemsNav && (itemsNav.logo)}
            </span>
          </a>
          {itemsNav && (
            <ul className="md:flex space-x-12 hidden">
              {itemsNav.navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  key={path}
                  className="block text-base text-gray900 hover:text-white first:font-medium"
                >
                  {link}
                </Link>
              ))}
            </ul>
          )}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-gray900 hover:text-white"
            >
              {itemsNav && (itemsNav.signInAndSignUp.login)}
            </a>
            <button className="text-white bg-gray900 py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey">
              {itemsNav && (itemsNav.signInAndSignUp.logup)}
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-amber-400 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {itemsNav && (
            <div
              className={`space-y-4 px-4 mt-16 py-7 bg-amber-400 ${
                isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
              }`}
            >
              {itemsNav.navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  key={path}
                  className="block text-base text-gray900 hover:text-white first:font-medium"
                >
                  {link}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
