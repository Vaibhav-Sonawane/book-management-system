import {Link} from "react-router-dom";

function BookCard({book, onDelete}){
    return (
        <>
            <div className="book-card">
                <h3>{book.title}</h3>
                <p><strong>Author:</strong>{book.author}</p>
                <p><strong>Genre:</strong>{book.genre}</p>
                <p><strong>Year:</strong>{book.year}</p>

                <div className="button-group">
                    <Link to={`/edit/${book.id}`}>
                        <button>Edit</button>
                    </Link>

                    <button onClick={()=>onDelete(book.id)}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default BookCard;