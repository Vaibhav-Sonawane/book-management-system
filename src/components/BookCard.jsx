import {Link} from "react-router-dom";
import styles from "../styles/BookCard.module.css";

function BookCard({book, onDelete}){
    return (
        <>
            <div className={styles.card}>
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.info}><strong>Author:</strong>{book.author}</p>
                <p className={styles.info}><strong>Genre:</strong>{book.genre}</p>
                <p className={styles.info}><strong>Year:</strong>{book.year}</p>

                <div className={styles.actions}>
                    <Link to={`/edit/${book.id}`}>
                        <button className={styles.editButton}>Edit</button>
                    </Link>

                    <button className={styles.deleteButton} onClick={()=>onDelete(book.id)}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default BookCard;