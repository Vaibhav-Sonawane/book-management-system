import { useNavigate } from "react-router-dom"
import BookForm from "../components/BookForm";
import { createBook } from "../api/booksApi";

function AddBookPage() {

    const navigate=useNavigate();

    const handleSubmit=async(formData)=>{
        try{
            await createBook(formData);
            navigate("/");

        }catch(err){
            alert(`${err} : Failed toadd book`);
        }
    };

  return (
    <div>
        <h2>Add Book</h2>
        <BookForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default AddBookPage;