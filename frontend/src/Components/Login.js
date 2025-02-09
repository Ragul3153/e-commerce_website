import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './config';
import { ToastContainer,toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common';


function Login(){

    const navigate = useNavigate();

    const [email,setemail]=useState("")
    const [password,setpassword] = useState("")

    const handlemail = (event) => {
        setemail(event.target.value)
    }

    const handlepassword = (event) => {
        setpassword(event.target.value)
    }

    const handlesubmit = async(e) => {
        e.preventDefault();
        
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log("User Logged In Successfull ...")
            navigate("/");
            toast.success("User Logged In Successfully ...", {
                 position: "top-center",
            });
        } catch(error) {
            console.log(error.message);
             toast.error("User Logged In Failed ...", {
                position: "top-center",
            });
        }
    };

    const handleregister = () => {
        navigate("/register")
    }

    return(
        <div className="bg-wallpaper bg-cover h-screen flex justify-center items-center ">
        <form onSubmit={handlesubmit} className="bg-white p-5 shadow-2xl">
            <ToastContainer />
            <h1 className="text-center font-bold text-2xl">Login</h1>

            <div className="m-3">
                <label className='font-bold'>Email</label> <br></br>
                <input type="email" className="border border-gray-500 rounded-sm outline-none p-1 w-64" placeholder="Enter Your Email" onChange={handlemail} value={email}></input>
            </div>  

            <div className="m-3">
                <label className='font-bold'>Password</label> <br></br>
                <input type="text" className="border border-gray-500 rounded-sm outline-none p-1 w-64"  placeholder="Enter Your Password" onChange={handlepassword} value={password}></input>
            </div>  
            
            <div className="m-3 text-center p-1 bg-blue-600 border rounded-sm border-transparent text-white">
                <button type='submit'>Submit</button>
            </div>

            <div className="flex gap-3  m-3">
                 <p>Do you haven't account?</p> 
                 <button type='button' className="hover:underline cursor-pointer hover:text-blue-800" onClick={handleregister}>Register</button>
            </div>
        </form>
        </div>
    )

}
export default Login