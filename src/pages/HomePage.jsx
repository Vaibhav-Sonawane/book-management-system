import { useEffect, useState } from 'react'
import { getBooks, deleteBook } from '../api/booksApi';
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessege";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import BookList from "../components/BookList";
import styles from "../styles/HomePage.module.css";

function HomePage() {
    const [books, setBooks]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState("");
    const [search, setSearch]=useState("");
    const [genre, setGenre]=useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            try{
                setLoading(true);
                const data = await getBooks();
                setBooks(data);
                setError("");
            } catch(err){
                setError(`${err} : Failed to fetch books`);
            } finally{
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleDelete=async(id)=>{
        try{
            await deleteBook(id);
            setBooks((prev)=>prev.filter((book)=>book.id !== id));
        }catch(err){
            setError(`${err} : Failed to delete book`);
        }
    };

    const filteredBooks=books.filter((book)=>{
        const matchesSearch=book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());

        const matchesGenre= genre=="" || book.genre.toLowerCase() == genre.toLowerCase();

        return matchesSearch && matchesGenre;
    });

    if(loading) return <Loader/>

    if(error) return <ErrorMessage message={error} />;

  return (
    <>
    <div>
        <div className={styles.searchfilter}>
            <SearchBar search={search} setSearch={setSearch} />
            <FilterBar genre={genre} setGenre={setGenre} books={books}/>
        </div>
        <BookList books={filteredBooks} onDelete={handleDelete} />
    </div>
    </>
  )
}

export default HomePage;