import { IoIosSearch } from "react-icons/io";
import Logo from "../assets/Logo.png"
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


function Home(){
    return(
        <header className="h-20 shadow-2xl">
                <div className="h-full container mx-auto flex items-center px-4 justify-between">
                    <div className="w-20 h-20">
                        <img src={Logo}></img>
                    </div>

                    <div className="hidden md:flex items-center w-full justify-between max-w-sm border rounded-full  focus-within:shadow-lg pl-2">
                        <input type="text" placeholder="Search Product here ..." className="w-full outline-none rounded-lg"></input>
                        <div className="min-w-[50px] bg-green-700 h-9 flex items-center justify-center rounded-r-full text-white text-3xl cursor-pointer border border-green-700">
                            <IoIosSearch />
                        </div>
                    </div>

                    <div className="flex items-ceter gap-5">
                        <div className="text-3xl md:text-3xl cursor-pointer">
                            <FaUser />
                        </div>

                        <div className="text-3xl relative">
                            <FaShoppingCart />

                            <div className="bg-green-700 text-white w-5 h-5 rounded-full flex flex-items justify-center absolute -top-2 -right-3">
                                <p className="text-sm">0</p>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default Home