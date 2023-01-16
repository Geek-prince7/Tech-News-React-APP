import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context'

const News = () => {
    const {isLoading,hits,removePost}=useGlobalContext();
    if(isLoading){
        return  <h4> loading ...</h4>
    }
  return (
    <div className='stories-div'>
        {hits.map(v=>{
            return <div className='card' key={v.objectID}>
                <h2>{v.title}</h2>
                <p>
                    By <span>{v.author}</span> | <span>{v.num_comments}</span> comments
                </p>
                <div className='card-button'>
                    <a href={v.url} target='_blank'>Read More</a>
                    <a href='#' onClick={()=>removePost(v.objectID)}>Remove</a>
                </div>
            </div>
        })}
        
    </div>
  )
}

export default News