import React, { useState } from 'react'
import { cgClose } from "react-icons/cg";
import productCategory from '../helpers/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import  uploadImage  from '../helpers/uploadImage';
import DispalyImage from './DispalyImage';
import { MdDelete } from "react-icons/md";
import SummaryApi from '../common';
import { toast } from 'react-toastify'
import { IoMdClose } from "react-icons/io";


const AdminEditProduct = ({
    onClose,
    productData,
    fetchdata
}) => {

    const [data,setdata] = useState({
        ...productData,
        productName : productData?.productName,
        brandName : productData?.brandName,
        category : productData?.category,
        productImage : productData?.productImage || [],
        description : productData?.description,
        price : productData?.price,
        sellingPrice : productData?.sellingPrice
    })

    const [openfullscreenimage,setopenfullscreenimage] = useState(false)
    const [fullscreenimage,setfullscreenimage] = useState("")

    const handlechange = (event) => {
        const { name, value } = event.target
        setdata((preve)=>{
            return{
                ...preve,
                [name] : value 
            }
        })
    }

    const handleuploadproduct = async (e) => {
        const file = e.target.files[0]
        const uploadImageColudinary = await uploadImage(file)

        setdata((preve)=>{
            return{
                ...preve,
                productImage : [ ...preve.productImage, uploadImageColudinary.url ]
            }
        })
    }

    const handledelete = async(index) => {

        const newproductImage = [ ...data.productImage ]
        newproductImage.splice(index,1)

        setdata((preve)=>{
            return{
                ...preve,
                productImage : [ ...newproductImage ]
            }
        })

    }

    const handlesubmit = async(event) => {
        event.preventDefault()

        const response = await fetch(SummaryApi.updateProduct.url,{
            method : SummaryApi.updateProduct.method,
            credentials : "include",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const responseData = await response.json()

        if(responseData.success){
            toast.success(responseData?.message)
            onClose()
            fetchdata()
        }

         if(responseData.error)
        {
            toast.error(responseData?.message)
        }

    }

  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
               
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='font-bold text-lg'>Edit Products</h2>
                    <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
                        <IoMdClose />
                    </div>
                </div>
    
                <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5' onSubmit={handlesubmit}>
                    <label htmlFor='productName' className='mt-3'>Product Name : </label>
                    <input className='p-2 bg-slate-100 border-rounded' type='text' id="productName" placeholder='Enter Your Product Name' name="productName" value={data.productName} onChange={handlechange} required></input>
    
                    <label htmlFor='brandName'  className='mt-3'>Brand Name : </label>
                    <input className='p-2 bg-slate-100 border-rounded' type='text' id="brandName" placeholder='Enter Your Brand Name' name='brandName' value={data.brandName} onChange={handlechange} required></input>
    
                    <label htmlFor='Category'  className='mt-3'>Category : </label>
                    <select required value={data.category} onChange={handlechange} name='category' className='p-2 bg-slate-100 border rounded'>
                    <option value={""}>Select Category</option>
                        {
                            productCategory.map((el,index)=>{
                                return(
                                    <option value={el.value} key={el.value+index}>{el.label}</option>
                                )
                            })
                        }
                    </select>
    
                    <label htmlFor='productImage'  className='mt-3'>Product Image : </label>
                    <label htmlFor='uploadImageInput'> 
                    <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                            <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                                <span className='text-4xl'><FaCloudUploadAlt/></span>
                                <p className='text-sm'>Upload Product Image</p>
                                <input type='file' id='uploadImageInput' className='hidden' onChange={handleuploadproduct}></input>
                            </div>    
                    </div>
                        </label>
                    <div>
                        {
                            data?.productImage[0] ? (
                                <div className='flex items-center gap-2'>
                                    {
                                        data.productImage.map((el,index)=>{
                                        return(
                                            <div className='relative group'>
                                                <img src={el} alt={el} width={80} height={80} className='bg-slate-100 border cursor-pointer' 
                                                onClick={()=>{
                                                setopenfullscreenimage(true) 
                                                setfullscreenimage(el)
                                                }}/>
    
                                                <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={()=>handledelete(index)}>
                                                    <MdDelete/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            ) : (
                                <p>*Please Upload Product image</p>
                            )
                        }
                        <img className='text-red-600 text-xs bg-slate-100 border' src='' width={80} height={80} ></img>
                    </div>
                        
                        <label htmlFor='price'  className='mt-3'>Price : </label>
                        <input className='p-2 bg-slate-100 border-rounded' type='number' id="price" placeholder='Enter Price' name='price' value={data.price} onChange={handlechange} required></input>
    
                        <label htmlFor='sellingPrice'  className='mt-3'>selling Price : </label>
                        <input className='p-2 bg-slate-100 border-rounded' type='number' id="sellingPrice" placeholder='Enter Selling Price' name='sellingPrice' value={data.sellingPrice} onChange={handlechange} required></input>
    
                        <label htmlFor='description'  className='mt-3'>Description : </label>
                        <textarea className='h-28 bg-slate-100 border resize-none p-1' placeholder='Enter Product Description' onChange={handlechange} name='description' value={data.description} rows={3}>
    
                        </textarea>
    
                        <button className='px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700'>Update Product</button>
    
                </form>
            </div>
    
            {/***display image full screen */}
            {
                openfullscreenimage && (
                    <DispalyImage onClose={()=>setopenfullscreenimage(false)} imgurl={fullscreenimage}/> 
                )
            }  
        </div>
  )
}

export default AdminEditProduct