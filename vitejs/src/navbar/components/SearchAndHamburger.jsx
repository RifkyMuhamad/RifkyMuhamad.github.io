import { IoIosMenu } from "react-icons/io";
import Search from "./Search";

const SearchAndHamburger = () => {
  return (
    <ul className="flex text-center gap-1">
      <li
        className="
            xsm:hidden
            sm:hidden
            md:block
            lg:block
            2xl:block"
      >
        <Search />
      </li>
      <li
        className="
            xsm: 
            sm:block 
            md:block
            lg:block
            xl:hidden
            2xl:hidden"
      >
        <a href="#">
          <IoIosMenu className="w-9 h-9" />
          <i className=""></i>
        </a>
      </li>
    </ul>
  );
};

export default SearchAndHamburger;
