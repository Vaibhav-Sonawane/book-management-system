import BookCard from '../components/BookCard';

function BookList({books, onDelete}) {
    if(books.length===0){
        return <p>No Books found</p>;
    }
    return (
    <div>
        {books.map((book)=>(
            <BookCard key={book.id} book={book} onDelete={onDelete}/>

        ))}
    </div>
  )
}

export default BookList;