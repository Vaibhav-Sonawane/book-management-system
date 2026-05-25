function Filterbar({genre, setGenre, books}) {
  
    const genres=[...new Set(books.map((book)=>book.genre))];

    return (
    <select value={genre} onChange={(e)=>setGenre(e.target.value)} className="input">
    <option value="">All Genres</option>
    {genres.map((item)=>(
        <option key={item} value={item}>
            {item}
        </option>
    ))}
    </select>
  );
}

export default Filterbar;