function SearchBar({search, setSearch}) {
  return (
    <>
    <input type="text" placeholder="Search using title or author" value={search} onChange={(e)=>setSearch(e.target.value)} className="input" />
    </>
  );
}

export default SearchBar;