import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify"
import moment from "moment"
import { MdModeEdit } from "react-icons/md";
import ChangeuserRole from "../Components/ChangeuserRole";

const Allusers = () => {

    const [alluser,setalluser] = useState([])
    const [openupdaterole,setopenupdaterole] = useState(false)
    const [updateuserdetails,setupdateuserdetails] = useState({
        email : "",
        name : "",
        role : "",
        _id  : ""
    })

    const fetchAllUsers = async() =>{
        const fetchData = await fetch(SummaryApi.allusers.url,{
            method : SummaryApi.allusers.method,
            credentials : 'include'
        })

        const dataResponse = await fetchData.json()

        if(dataResponse.success){
            setalluser(dataResponse.data)
        }

        if(dataResponse.error){
            toast.error(dataResponse.message)
        }

    }
 

 useEffect(()=>{
    fetchAllUsers()
 },[])

 return(
    <div>
        <table className="w-full usertable">
            <thead>
                <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="">
                {
                    alluser.map((el,index) => {
                        return(
                            <tr className="bg-black text-white">
                                <td>{index+1}</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.role}</td>
                                <td>{moment(el?.createdAt).format('LL')}</td>
                                <td>
                                    <button className="bg-green-200 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white" 
                                    onClick={()=>{
                                        setupdateuserdetails(el)
                                        setopenupdaterole(true)
                                    }}
                                        >
                                        <MdModeEdit/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {
            openupdaterole && (
                <ChangeuserRole 
                onClose={()=>setopenupdaterole(false)}  
                name={updateuserdetails.name}
                email={updateuserdetails.email}
                role={updateuserdetails.role}
                userId={updateuserdetails._id}
                callFunc={fetchAllUsers}
                />
                
            )
        }
                
    </div>
)
}
 export default Allusers