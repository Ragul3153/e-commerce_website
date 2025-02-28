import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../common';
import Context from '../Context';

const Cart = () => {

  const [data,setData] = useState([])
  const [loading,setloading] = useState(false)
  const context = useContext(Context)
  const loadingCart = new Array(context.cartProductCount).fill(null)

  const fetchData = async() => {
    setloading(true)
    const response = await fetch(SummaryApi.addToCartProductView.url,{
      method : SummaryApi.addToCartProductView.method,
      credentials : "include",
      headers : {
        "content-type" : "application/json"
      },
    })
    //setloading(false)

    const responseData = await response.json()

    if(responseData.success){
      setData(responseData.data)
    }

  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='container mx-auto'>
      <div className='text-center text-lg  my-3'>
        {
        data.length === 0 & !loading && (
            <p className='bg-white py-5'>No Data</p>
        )
      }
      </div>

      <div>
        { /**view product */ }
        <div className='w-full max-w-3xl'>

            loading  ? (
              loadingCart.map(el => {
                return(
                   <div key={el+"Add To Cart Loading"} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>

                  </div>
                )
              })
             
            ) : (
              <div>

              </div>
            )
            
        </div>

          { /**Total Product */ }
          <div className='mt-5 lg:mt-0'>
            {
            loading ? (
              <div className='h-36 bg-slate-200'>
                  total
              </div>
            ) :  : (
            <div className='h-36 bg-slate-200'>
              total
            </div>
          )     
        }
          </div>

      </div>
    </div>
  )
}

export default Cart