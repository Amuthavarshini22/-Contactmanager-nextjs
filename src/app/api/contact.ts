import axios from "axios";
import { ContactType } from "../_types/contact";
const API_URL="http://localhost:4000"


export const getContacts=async(userId:string)=>{
    const response=await axios.get(`${API_URL}/contacts?userId=${userId}`);
    return response.data;
};



export const getContactById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/contacts/${id}`); // ✅ correct
    return response.data;
  } catch (error: any) {
    console.error("Failed to fetch contact:", error.response?.status, error.message);
    return null;
  }
};

export const createContact=async(contact:ContactType)=>{
    const response=await axios.post(`${API_URL}/contacts`,contact);
    return response.data;
};

export const updateContact=async(id:string,contact:ContactType)=>{
    const response=await axios.put(`${API_URL}/contacts/${id}`,contact);
    return response.data;
};

export const deleteContact=async(id:string)=>{
    const response=await axios.delete(`${API_URL}/contacts/${id}`);
    return response.data;
};