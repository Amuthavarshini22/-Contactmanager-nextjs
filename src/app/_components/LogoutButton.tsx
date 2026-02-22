"use client"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import React from 'react'
import { logoutAction } from '../actions/auth';


const LogoutButton = () => {
    const router=useRouter();
     const handleLogout=async()=>{
        try{
            await logoutAction();
            router.push("/login");
            router.refresh();
        }catch(error){
            console.log("Logout failed:",error);
        }
        
    };
  return <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer' onClick={handleLogout}>Logout</button>
}

export default LogoutButton