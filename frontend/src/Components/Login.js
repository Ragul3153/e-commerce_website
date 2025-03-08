import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { auth } from './config';
import { ToastContainer,toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common/index';
import Context from '../Context/index';


function Login(){

    const navigate = useNavigate();
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

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

            const data = {
            email: email,
            password: password
        };

        try{

            const dataResponse = await fetch("https://e-commerce-website-frontend-sigma.vercel.app",{
            method : "post",
            credentials : "include",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()
        console.log(dataApi);
        
        
        if(dataApi.success){ 
            toast.success(dataApi.message)
            fetchUserDetails()
            fetchUserAddToCart()
            navigate("/")
            
        }
        if(dataApi.error){
            toast.error(dataApi.message)
        }

            await signInWithEmailAndPassword(auth,email,password);
            console.log("User Logged In Successfull ...")
            toast.success("User Logged In Successfully ...", {
                 position: "top-center",
            });
            navigate("/");
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
                <input type="email" className="border border-gray-500 rounded-sm outline-none p-1 w-60" placeholder="Enter Your Email" onChange={handlemail} value={email}></input>
            </div>  

            <div className="m-3">
                <label className='font-bold'>Password</label> <br></br>
                <input type="password" className="border border-gray-500 rounded-sm outline-none p-1 w-60"  placeholder="Enter Your Password" onChange={handlepassword} value={password}></input>
            </div>  
            
            <div className="m-3">
                <button className='text-center font-bold px-24 py-1 bg-green-700 border rounded-sm border-transparent text-white' type='submit'>Submit</button>
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