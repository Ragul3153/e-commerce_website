import React, { useEffect, useState } from "react";
import UploadProducts from "../Components/UploadProducts";
import SummaryApi from "../common";
import AdminProduct from "../Components/AdminProduct";


 const Allproduct = () => {

    const [openuploadproducts,setopenuploadproducts] = useState(false)
    const [allProduct,setallProduct] = useState([])

    const fetchallProduct = async() => {
        const response = await fetch(SummaryApi.allProduct.url)
        const dataResponse = await response.json()
        console.log(dataResponse)

        setallProduct(dataResponse?.data)
    }

    useEffect(()=>{
        fetchallProduct()
    },[])

    return(
        <div>
            <div className="bg-white py-2 px-4 flex justify-between items-center">
                <h2 className="font-bold text-lg">Allproduct</h2>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all py-1 px-3 rounded-full" onClick={()=>setopenuploadproducts(true)}>Upload products</button>
            </div>

            {/**all Product */}
            <div className="flex items-center gap-5 py-4 flex-wrap h-[calc(100vh-130px)] overflow-y-scroll">
                {
                    allProduct.map((product,index)=>{
                        return(
                            <AdminProduct data={product} key={index+"allProduct"} fetchdata={fetchallProduct}/>

                        )
                    })
                }
            </div>


            {/**Upload Product Components */}
            {
                openuploadproducts && (
                <UploadProducts onClose={()=>setopenuploadproducts(false)} fetchData={fetchallProduct}/>
                )
            }
            

        </div>
    )
 }

 export default Allproduct