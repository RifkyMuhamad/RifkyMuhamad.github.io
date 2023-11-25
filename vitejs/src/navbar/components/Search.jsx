import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex bg-stone-200 justify-around">
      <IoIosSearch className="w-6 h-6"/>
      <input
        className="border-none focus:outline-none bg-slate-700"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;