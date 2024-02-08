'use client'
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';


const Page = () => {
  const [user, setUser] = useState<{name?:string, email?:string}>({});
  const router = useRouter()
  const fetchData =async () => {
   try{
    const response =await axios.get("/api/profile");
    const data = await response.data?.user;
    setUser(data);
   }catch(error:any){
    toast.error(error.response.data.error);
   }    
  }
  
  const logoutUser = async()=>{
    try {
          const {data} = await axios.get("/api/logout");
          // const data = await response.data?.user;

          toast.success(data.msg);
          setUser({});
          router.push("/login");
    } catch (error:any) {
      toast.error(error.response.data.error);
    }
  }
    

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='min-h-screen flex justify-center items-center  text-4xl'>
      <div className=" card border p-5 shadow-lg">
        <h1 className='mb-2'>Name : {user && user.name}</h1>
        <h1 className='mb-2'>Gmail : {user && user.email}</h1>
        <button onClick={logoutUser} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Page;
