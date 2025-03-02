import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoMdClose } from "react-icons/io";
import SummaryApi from '../common';
import { toast } from "react-toastify"

const ChangeuserRole = ({

    name,
    email,
    role,
    userId,
    onClose,
    callFunc,
}) => { 
    const [userrole,setuserrole] = useState(role)

    const handlechange = (event) => {
        setuserrole(event.target.value)

        console.log(event.target.value)
    }

    const updateuserrole = async() => {

    const fetchResponse = await fetch(SummaryApi.updateuser.url,{
        method : SummaryApi.updateuser.method,
        credentials : "include",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            userId : userId,
            role : userrole
        })
    })

    const responseData = await fetchResponse.json()

    if(responseData.success){
        toast.success(responseData.message)
        onClose()
        callFunc()
    }

    console.log("role-updated",responseData)

    }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50'>
        <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>

            <button className='block ml-auto' onClick={onClose}>
                <IoMdClose/>
            </button>

            <h1 className='pb-4 text-lg font-medium'>ChangeuserRole</h1>

            <p>Name : {name}</p>
            <p>Email : {email}</p>

            <div className='flex items-center justify-between my-4'>
                <p>Role : </p>
            <select className='border px-4 py-1' value={userrole} onChange={handlechange}>
                {
                    Object.values(ROLE).map(el => {
                        return(
                              <option value={el} key={el}>{el}</option>
                        )
                    })
                }

            </select>

            <button className='w-fit mx-auto block py-1 px-3 rounded-full bg-green-400 text-white hover:bg-green-700' onClick={updateuserrole}>Change Role</button>

            </div>
        </div>
    </div>
  )
}

export default ChangeuserRole