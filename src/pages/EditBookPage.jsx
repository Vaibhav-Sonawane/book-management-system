import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getBooksById, updateData } from "../api/booksApi";
import BookForm from "../components/BookForm";

function EditBookPage() {
    const {id}=useParams();
    const navigate=useNavigate();
    const [book, setBook]=useState(null);

    useEffect(()=>{
        const fetchBook=async()=>{
            try{
                const data=await getBooksById(id);
                setBook(data);
            }catch(err){
                alert(`${err} : Failed to get the book`);
            }
        };
        fetchBook();
    },[id]);

    const handleSubmit=async(formData)=>{
        try{
            await updateData(id, formData);
            navigate();
        }catch(err){
            alert(`${err} : Failed to update book`);
        }
    };

    if(!book){
        return <p>Loading...</p>
    }

  return (
    <div>
        <h2>Edit Book</h2>
        <BookForm initialData={book} onSubmit={handleSubmit} />
    </div>
  )
}

export default EditBookPage;