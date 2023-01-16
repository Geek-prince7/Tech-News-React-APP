import React, { useContext, useReducer,useEffect } from "react";
import reducer from './Reducer'
import axios from "axios";


//creating the context
const AppContext=React.createContext()

//initial state define
let initial_state={
    isLoading:true,
    query:'CSS',
    nbPages:0,
    page:0,
    hits:[],

}
let API='http://hn.algolia.com/api/v1/search?'

//create a provider function with global use
const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initial_state);
    const getData=async(url)=>{
        dispatch({type:'set_loading'})
        try {
            let data=await axios.get(url)
            console.log(data.data.hits)
            dispatch({
                type:'get_hits',
                payload:{
                    hit_data:data.data.hits,
                    no_pages:data.data.nbPages,
                    cur_page:data.data.page,
                    query:data.data.query
                }
            })
            
        } catch (error) {
            console.log(`erorr in fetching data from api ${error}`)
        }
    }

    //remove a post
    const removePost=(postId)=>{
        dispatch({
            type:'remove_post',
            payload:postId
        })
    }

    //search
    const search=(query)=>{
        dispatch({
            type:'new_query',
            payload:query
        })

    }
    const getNextPage=()=>{
        let page=state.page==state.nbPages-1?0:state.page+1
        dispatch({
            type:'next_page_request',
            payload:page
        })
    }
    const getPrevPage=()=>{
        let page=state.page==0?state.nbPages-1:state.page-1
        dispatch({
            type:'next_page_request',
            payload:page
        })
    }

    useEffect(()=>{
        getData(`${API}query=${state.query}&page=${state.page}`)
    },[state.query,state.page])
    return (
        <AppContext.Provider value={{...state,removePost,search,getNextPage,getPrevPage}}>
            {children}
        </AppContext.Provider>
    )
}

//creating a custom hook
const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext}