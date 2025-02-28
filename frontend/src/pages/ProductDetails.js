import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import SummaryApi from '../common'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";  
import displayINRCurrency from '../helpers/displayCurrency';
import VerticalCardProduct from '../Components/VerticalCardProduct';
import CategoryWiseProductDisplay from '../Components/CategoryWiseProductDisplay';

const ProductDetails = () => {

  const [data,setdata] = useState({
        productName : "",
        brandName : "",
        category : "",
        productImage : [],
        description : "",
        price : "",
        sellingPrice : ""
  })

  const params = useParams()
  const [loading,setloading] = useState(true)
  const productImageListLoading = new Array(4).fill(null)
  const [activeImage,setactiveImage] = useState("")

  const [zoomImageCoordinate,setzoomImageCoordinate] = useState({
    x : 0,
    y : 0
  })

  const [zoomImage,setzoomImage] = useState(false)

  const fetchProductDetails = async() => {
    setloading(true)
    const response = await fetch(SummaryApi.productDetails.url,{
      method : SummaryApi.productDetails.method,
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify({
        productId : params?.id
      })
    })

      setloading(false)
      const dataResponse  = await response.json()

      setdata(dataResponse?.data)
      setactiveImage(dataResponse?.data?.productImage[0])
  }

  useEffect(()=>{
    fetchProductDetails()
  },[])

  const handleMouseEnterProduct = (imageURL) => {
     setactiveImage(imageURL)
  }

  const handlezoomImage = useCallback((e) => {
    setzoomImage(true)
    const { left, top, width, height } = e.target.getBoundingClientRect()

    const x = (e.clientX - left) / width
    const y = (e.client - top) / height

    setzoomImageCoordinate({
      x,
      y
    })
  },[zoomImageCoordinate])

  const handleLeaveImageZoom = () => {
    setzoomImage(false)
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
        {/**product Image */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
              <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply cursor-pointer' onMouseMove={handlezoomImage} onMouseLeave={handleLeaveImageZoom}/>

            {/**product Zoom*/}
            {
              zoomImage && (
              <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 right-[510px] top-0'>
                  <div className='w-full h-full min-w-[500px] min-h-[400px] mix-blend-multiply scale-150' 
                  style={{
                  backgroundImage : url(${activeImage}),
                  backgroundRepeat : "no-repeat",
                  backgroundPosition : "$(zoomImageCoordinate.x * 100)% $(zoomImageCoordinate.y * 100)%"
                  }}>
              </div>
            </div>
              )
            }
            

          </div>
          <div className='h-full'>
              {
                loading ? (

                 <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {
                       productImageListLoading.map(el => {
                        return(
                          <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage"}>

                          </div> 
                    )
                  })
                }
                </div>
                  
                ) : (
                 <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {
                    data?.productImage?.map((imgURL,index) => {
                        return(
                          <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                             <img src={imgURL} className='w-full h-full object-scale-down mix-blend-multiply'/>
                          </div> 
                    )
                  })
                }
                </div> 
                )
              }
          </div>
        </div>

            {/**product details */}
        {
          loading ? (
            <div className='grid gap-1 w-full'> 
                <p className='bg-red-200 text-red-600 h-6 lg:h-8 w-full rounded-full inline-block'></p>
                <h2 className='text-2xl lg:text-4xl font-medium h-6 bg-slate-200 animate-pulse w-full lg:h-8'></h2>
                <p className='capialize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 w-full lg:h-8'></p>

          <div className='text-red-600 h-6 bg-slate-200 animate-pulse flex items-center gap-1 w-full lg:h-8'>
             
          </div>

          <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:h-8 animate-pulse w-full'>
            <p className='text-red-600 bg-slate-200 w-full'></p>
            <p className='text-slate-400 line-through bg-slate-200 w-full'></p>
          </div>

          <div className='flex items-center gap-3 my-2 w-full'>
            <button className='h-6 lg:h-8 bg-slate-200 rounded animate-pulse w-full'></button>
            <button className='h-6 lg:h-8 bg-slate-200 rounded animate-pulse w-full'></button>
          </div>
          
          <div className='w-full'>
            <p className='text-slate-600 font-medium my-1 h-6 bg-slate-200 rounded animate-pulse w-full lg:h-8'></p>
            <p className='h-10 bg-slate-200 rounded animate-pulse w-full lg:h-12'></p>
          </div>
        </div>
          ) : 

          (
            <div className='flex flex-col gap-1'> 
                <p className='bg-red-200 text-red-600 px-2 rounded-full inline-block w-fit'>{data?.brandName}</p>
                <h2 className='text-2xl lg:text-4xl font-medium'>{data?.productName}</h2>
                <p className='capialize text-slate-400'>{data?.category}</p>

          <div className='text-red-600 flex items-center gap-1'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />  
          </div>

          <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
            <p className='text-red-600'>{displayINRCurrency(data.sellingPrice)}</p>
            <p className='text-slate-400 line-through'>{displayINRCurrency(data.Price)}</p>
          </div>

          <div className='flex items-center gap-3 my-2'>
            <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white'>Buy</button>
            <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white  bg-red-600 hover:text-red-600 hover:bg-white'>Add to Cart</button>
          </div>
          
          <div>
            <p className='text-slate-600 font-medium my-1'>Description : </p>
            <p>{data?.description}</p>
          </div>
        </div>
          )
        }
      </div>

      {
        data.category && (
          <CategoryWiseProductDisplay category={data?.category} heading={"Recommended Product"}/>
        )
      }
    

    </div>
  )
}

export default ProductDetails 