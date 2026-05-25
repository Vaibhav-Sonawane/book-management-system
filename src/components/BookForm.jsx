import { useEffect, useState } from "react";


function BookForm({initialData, onSubmit}) {

    const [formData, setFormData]=useState({
        title:"",
        author:"",
        genre:"",
        year:"",
    });

    useEffect(()=>{
        if(initialData){
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const {title, author, genre, year}= formData;

        if(!title || !author || !genre || !year){
            alert("All fields are required");
            return;
        }
        if(isNaN(year)){
            alert("Year must be numeric");
            return;
        }
        onSubmit(formData);
    }
    
  return (
    <form onSubmit={handleSubmit} className="book-form">
        <input type="text" name="title" placeholder="Book Title" value={formData.title} onChange={handleChange} className="input" />
        
        <input type="text" name="author" placeholder="Book Author" value={formData.author} onChange={handleChange} className="input" />

        <input type="text" name="genre" placeholder="Book Genre" value={formData.genre} onChange={handleChange} className="input" />

        <input type="text" name="year" placeholder="Publishing Year" value={formData.year} onChange={handleChange} className="input" />

        <button type="submit">Save Book</button>
    </form>
  )
}

export default BookForm;