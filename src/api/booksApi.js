import axios from "axios";

const base_url="https://6a1430636c7db8aac054031b.mockapi.io/api/bms/books";

export const getBooks=async()=>{
    const response =await axios.get(base_url);
    return response.data;
};

export const getBooksById=async(id)=>{
    const response=await axios.get(`${base_url}/${id}`);
    return response.data;
};

export const createBook=async(bookData)=>{
    const response =await axios.post(base_url, bookData);
    return response.data;
};

export const updateData=async(id, bookData)=>{
    const response=await axios.put(`${base_url}/${id}`, bookData );
    return response.data;
};

export const deleteBook=async(id)=>{
    const response=await axios.delete(`${base_url}/${id}`);
    return response.data;
};