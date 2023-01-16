import React from 'react'
import { useGlobalContext } from '../Context'

const Search = () => {
    const {search,query}=useGlobalContext();
  return (
    <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
                <input type="text" placeholder='search...'   onChange={(e)=>search(e.target.value)}></input>
            </div>
        </form>
    </>
  )
}

export default Search