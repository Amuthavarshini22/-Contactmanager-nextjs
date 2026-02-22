"use client"
import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact'
import { FiTrash2 } from 'react-icons/fi';
import { deleteContactAction } from '../actions/contact';


type DeleteButtonProps={
    action:(prevState :any,formData:FormData)=>Promise<any>;
    contact?:ContactType;
}
const DeleteButton = ({ action,contact}:DeleteButtonProps) => {
    const[state,formAction]=useActionState(action,null);
  return( 
  <form action={formAction} method='POST'>
    <input type="hidden" name='id'value={contact?.id} />
    <button type='submit' className='flex items-center gap-2 px-3 py-1 border border-red-300 rounded-md hover:border-red-400 text-red-700 cursor-pointer'
    onClick={(e)=>{
        if(!confirm("Are you sure want to delete this contact?")){
            e.preventDefault();
        }
    }}>
        <FiTrash2 className='text-red-500 txt-lg'/>Delete
    </button>
  </form>
  );
}

export default DeleteButton;



