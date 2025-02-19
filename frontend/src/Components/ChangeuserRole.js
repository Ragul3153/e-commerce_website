import React from 'react'
import ROLE from '../common/role'

const ChangeuserRole = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center'>
        <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>
            <h1>ChangeuserRole</h1>
            <p>Name : Ragul</p>
            <p>Email : ragulkumar3153@gmail.com</p>

            <select>

                {
                    Object.values(ROLE).map(el => {
                        return(
                              <option value={el} key={el}>{el}</option>
                        )
                    })
                }

            </select>
        </div>
        
    </div>
  )
}

export default ChangeuserRole