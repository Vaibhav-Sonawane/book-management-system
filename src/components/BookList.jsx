import BookCard from '../components/BookCard';
import styles from "../styles/BookList.module.css";

function BookList({books, onDelete}) {
    if(books.length===0){
        return <p>No Books found</p>;
    }
    return (
    <div className={styles.list}>
        {books.map((book)=>(
            <BookCard key={book.id} book={book} onDelete={onDelete}/>
        ))}
    </div>
  )
}

export default BookList;