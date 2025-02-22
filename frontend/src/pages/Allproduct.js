import React, { useEffect, useState } from "react";
import UploadProducts from "../Components/UploadProducts";
import SummaryApi from "../common";
 const Allproduct = () => {

    const [openuploadproducts,setopenuploadproducts] = useState(false)
    const [allProduct,setallProduct] = useState([])

    const fetchallProduct = async() => {
        const response = await fetch(SummaryApi.allProduct.url)
        const dataResponse = await response.json()

        setallProduct(dataResponse?.data || [])
    }

    useEffect(()=>{
        fetchallProduct()
    },[])

    return(
        <div>
            <div className="bg-white py-2 px-4 flex justify-between items-center">
                <h2 className="font-bold text-lg">Allproduct</h2>
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full" onClick={()=>setopenuploadproducts(true)}>Upload products</button>
            </div>

            {/**all Product */}
            <div className="flex items-center gap-5 py-4">
                {
                    allProduct.map((product,index)=>{
                        return(
                            <adminProduct data={product} key={index+"allProduct"} fetchdata={fetchallProduct}/>

                        )
                    })
                }
            </div>


            {/**Upload Product Components */}
            {
                openuploadproducts && (
                <UploadProducts onClose={()=>setopenuploadproducts(false)}/>
                )
            }
            

        </div>
    )
 }

 export default Allproduct