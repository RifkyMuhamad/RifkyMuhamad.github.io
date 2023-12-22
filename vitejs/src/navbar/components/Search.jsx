import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="">
      <input
        className=""
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;