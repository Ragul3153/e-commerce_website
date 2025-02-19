import React from "react";
import { useSelector } from 'react-redux'
import { FaUser } from "react-icons/fa";
import { Link,Outlet } from 'react-router-dom'

const Adminpanel = () => {
    const user = useSelector(state => state?.user?.user)
    return( 
        <div className="min-h-[calc(100vh-120px)] md:flex hidden">
            <aside className="bg-white min-h-full w-full max-w-60 customshadow">
                <div className="h-32 bg-red-500 flex justify-center items-center flex-col">
                    <div className="text-5 xl md:text-3xl cursor-pointer">
                         <FaUser />
                    </div>
                    <p className="capitalize text-lg font-bold">{user?.name}</p>
                    <p className="text-sm">{user?.role}</p>
                </div>

                    {/***navigation */}
                <div>
                    <nav className="grid">
                        <Link to={"all users"} className="px-2 py-1 hover:bg-slate-100">All Users</Link>
                        <Link to={"all-product"} className="px-2 py-1 hover:bg-slate-100">All product</Link>
                    </nav>
                </div>

            </aside>

            <main className="w-full h-full p-2">
                <outlet/>
            </main>
        </div>
    )
}
 
export default Adminpanel