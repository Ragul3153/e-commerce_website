import React, { useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import AdminEditProduct from './AdminEditProduct'
import displayINRCurrency from '../helpers/displayCurrency'

const AdminProduct = ({
    data,
    fetchdata
}) => {

    const [editproduct,seteditproduct] = useState(false)

  return (
    <div className="bg-slate-300 p-4 rounded">
        <div className='w-40'>
            <div className='w-40 h-40 flex justify-center items-center border rounded'>
                <img src={data?.productImage[0]} className='mx-auto object-fill h-full'></img>
            </div>
            <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

            <div>

            <div className='font-semibold'>
                {
                    displayINRCurrency(data.sellingPrice)
                }
            </div>


            <div className='w-fit ml-auto p-2 bg-green-500 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={()=>seteditproduct(true)}>
                <MdModeEditOutline/>
            </div>

            </div>

        </div>

        {
            editproduct &&  (
                <AdminEditProduct productData={data} onClose={()=>seteditproduct(false)} fetchdata={fetchdata}/>
            )
        }

    </div>
  )
}

export default AdminProduct