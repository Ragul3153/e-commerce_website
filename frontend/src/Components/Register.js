import { createUserWithEmailAndPassword } from "firebase/auth"
import React from "react"
import { useState } from "react"
import { auth, db } from "./config"
import { setDoc, doc } from "firebase/firestore"
import { ToastContainer,toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import SummaryApi from "../common"

function Register(){
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [fname,setfname] = useState("")
    const [lname,setlname] = useState("")

    const navigate = useNavigate()

    const handlefname = (event) => {
        setfname(event.target.value)
    }

    const handlelname = (event) => {
        setlname(event.target.value)
    }

    const handlemail = (event) => {
        setemail(event.target.value)
    }

    const handlepassword = (event) => {
        setpassword(event.target.value)
    }

    const handleregister = async (e) =>{
        e.preventDefault();

        try{

      const data = {
      email,
      password,
      fname,
      lname,
    };

        const dataResponse = await fetch(SummaryApi.signUP.url,{
                method : SummaryApi.signUP.method,
                headers :  {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
                })

                const dataApi = await dataResponse.json()

                if(dataApi.success){
                    toast.success(dataApi.message)
                    navigate("/login")
                }

                if(dataApi.error){  
                    toast.error(dataApi.message)
                }
                toast(dataApi.message)

                console.log("data",dataApi)

          await createUserWithEmailAndPassword(auth,email,password)
          const user = auth.currentUser;
          console.log(user);
          if (user) {
            await setDoc (doc(db, "Users", user.uid),  {
                email: user.email,
                firstname: fname,
                lastname: lname,
            })
          }
          console.log("User registered Successfully ... ")
          navigate("/login");
          toast.success("User Registered Successfully ...", {
            position: "top-center",
          });
        }
        catch(error){
            console.log(error.message);
            toast.error(error.message, {
            position: "top-center",
          });
        }
    };

    const handlelogin = () => {
        navigate("/login")
    }
    
    return(
        <div className="bg-wallpaper bg-cover h-screen flex justify-center items-center">
            <form onSubmit={handleregister} className="bg-white p-5 shadow-2xl">
                <ToastContainer />
                <h1 className="text-center font-bold text-2xl">Register</h1>

                <div className="m-3">
                    <label className='font-bold'>First Name</label> <br></br>
                    <input type="text" className="border border-gray-500 rounded-sm outline-none p-1 w-64" onChange={handlefname} placeholder="Enter Your First Name"></input>
                </div>

                <div className="m-3">
                    <label className='font-bold'>Last Name</label> <br></br>
                    <input type="text" className="border border-gray-500 rounded-sm outline-none p-1 w-64" onChange={handlelname} placeholder="Enter Your Last Name"></input>
                </div>

                <div className="m-3">
                    <label className='font-bold'>Email</label> <br></br>
                    <input type="text" className="border border-gray-500 rounded-sm outline-none p-1 w-64" onChange={handlemail} placeholder="Enter Your Email"></input>
                </div>

                <div className="m-3">
                    <label className='font-bold'>Password</label> <br></br>
                    <input type="password" className="border border-gray-500 rounded-sm outline-none p-1 w-64" onChange={handlepassword} placeholder="Enter Your Password"></input>
                </div>
                
                <div className="m-3">
                    <button className="text-center font-bold px-24 py-1 bg-green-600 border rounded-sm border-transparent text-white">Register</button>
                </div>

                <div className="flex gap-3  m-3">
                    <p>Already have an account?</p> 
                    <button className="hover:underline cursor-pointer hover:text-green-800" onClick={handlelogin}>Login</button>
                </div>
            </form>
        </div>
    )

}

export default Register