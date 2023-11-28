import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex rounded-2xl justify-around py-1 px-3 gap-2 bg-slate-700">
      <IoIosSearch className="w-6 h-6 text-white"/>
      <input
        className="border-none px-4 focus:outline-none text-white  bg-slate-700"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;

{/* <IoIosSearch className="w-[3.5rem] h-[3.5rem]"/> */}