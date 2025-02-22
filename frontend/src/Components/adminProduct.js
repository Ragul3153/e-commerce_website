import React, { useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'

export const adminProduct = ({
    data,
    fetchdata
}) => {

    const [editproduct,seteditproduct] = useState(false)

  return (
    <div className="bg-white p-4 rounded">
        <div className='w-40'>
            <img src={data?.productImage[0]} width={120} height={120} className='w-fit mx-auto'></img>
            <h1>{data.productName}</h1>

            <div>

            <div>
                {data.sellingPrice}
            </div>


            <div className='w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={()=>seteditproduct(true)}>
                <MdModeEditOutline/>
            </div>

            </div>

        </div>

        {
            editproduct &&  (
                <adminEditProduct data={data} onClose={()=>seteditproduct(false)} fetchdata={fetchdata}/>
            )
        }

    </div>
  )
}

export default adminProduct