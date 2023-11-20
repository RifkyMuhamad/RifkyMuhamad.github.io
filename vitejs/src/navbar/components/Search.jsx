import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex bg-stone-200 justify-around w-1/10">
      <IoIosSearch className="w-6 h-6"/>
      <input
        className="border-none focus:outline-none"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
