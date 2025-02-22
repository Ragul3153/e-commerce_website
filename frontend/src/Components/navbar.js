import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Logo from "../assets/Logo.png"
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify"
import { setUserDetails } from "../store/userSlice";
import { useState } from "react";
import SummaryApi from "../common/index"
import ROLE from "../common/role";


const Navbar = () => {
    const user = useSelector(state => state?.user?.user)
    console.log(user);
    
    const dispatch = useDispatch()
    const [menudisplay,setmenudisplay] = useState(false)

    const navigate = useNavigate()

    const  handlelogin = () => {
        navigate("/login")
    }

    const handleLogout = async() => {
        const fetchData = await fetch(SummaryApi.logout_user.url,{
            method : SummaryApi.logout_user.method,
            credentials : "include"
        })

        const data = await fetchData.json()

        if(data.success){
            toast.success(data.message)
            dispatch(setUserDetails(null))
        }

        if(data.error){
            toast.success(data.message)
        }
    }

  return(
        <header className="h-20 shadow-2xl">
                <div className="h-full container mx-auto flex items-center px-4 justify-between">
                    <div className="w-20 h-20">
                        <Link to={"/"}>
                            <img src={Logo}></img>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center w-full justify-between max-w-sm border rounded-full  focus-within:shadow-lg pl-2">
                        <input type="text" placeholder="Search Product here ..." className="w-full outline-none rounded-lg"></input>
                        <div className="min-w-[50px] bg-green-700 h-9 flex items-center justify-center rounded-r-full text-white text-3xl cursor-pointer border border-green-700">
                            <IoIosSearch />
                        </div>
                    </div>

                    <div className="flex items-ceter gap-5">
                        <div className="relative group flex justify-center">
                            {
                                user?._id && (
                                      <div className="text-3xl md:text-3xl cursor-pointer" onClick={()=>setmenudisplay(preve => !preve)}>
                                        <FaUser />
                                      </div>

                                )
                            }
                          
                            {
                                menudisplay && (
                                 <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                                    <nav>
                                        {
                                            user?.role === ROLE.GENERAL && (
                                            <Link to={"/admin-panel"} className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2" onClick={()=>setmenudisplay(preve => !preve)}>Admin Panel</Link>
                                            )
                                        }       
                                    </nav>
                                 </div>
                                )
                            }

                        </div>
                        
                        <div className="text-3xl relative">
                            <FaShoppingCart />

                            <div className="bg-green-700 text-white w-5 h-5 rounded-full flex flex-items justify-center absolute -top-2 -right-3">
                                <p className="text-sm">0</p>
                            </div>
                        </div>

                        <div className="bg-green-700 px-3 py-1 border rounded-2xl text-white font-bold">
                            {
                                user?._id ? (
                                    <button onClick={handleLogout}>Logout</button>
                                )
                                : (
                                <button onClick={handlelogin}>Login</button>
                                )
                            }
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default Navbar