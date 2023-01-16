import React from 'react'
import { useGlobalContext } from '../Context'

const Pagination = () => {
    const {page,nbPages,getNextPage,getPrevPage}=useGlobalContext()
  return (
    <div className='pagination-btn'>
        <button onClick={()=>getPrevPage()}>Prev</button>
        <p>page {page+1} of {nbPages}</p>
        <button onClick={()=>getNextPage()}>next</button>
    </div>
  )
}

export default Pagination