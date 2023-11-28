import Logo from "./components/Logo";
import ListNavbar from "./components/ListNavbar";
import MediaQuery from "./components/MediaQuery";
import SearchAndHamburger from "./components/SearchAndHamburger";

const Navbar = () => {
  return (
    <div className="navbar px-4 py-3">
      <header className="box-border container mx-auto">
        <nav
          className="
            items-center justify-between
            flex fixed
            px-[2em] py-[1%] m-0
            top-0 right-0 left-0 
            bg-opacity-50 bg-slate-500
            z-[9999]"
        >
          <div className="flex">
            <Logo />
          </div>

          <div className="bg-lime-600">
            <MediaQuery />
          </div>

          <div className="font-bold">
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

{
  /* <nav
          className="
            xsm:text-xs
            lg:text-[2rem] lg:p-[2em]

            items-center justify-between
            flex fixed
            px-[2em] py-[1%] m-0
            top-0 right-0 left-0 
            bg-white bg-opacity-50 
            z-[9999]"
        ></nav> */
}
