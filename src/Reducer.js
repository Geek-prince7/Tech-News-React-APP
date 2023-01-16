const reducer=(state,action)=>{
    switch(action.type){
        case 'get_hits':
            return {
                ...state,
                nbPages:action.payload.no_pages,
                hits:action.payload.hit_data,
                page:action.payload.cur_page,
                isLoading:false,
                query:action.payload.query
            }
            break;
        case 'set_loading':
            return{
                ...state,
                isLoading:true
            }
        case 'remove_post':
            return {
                ...state,
                hits:state.hits.filter((current)=>{
                    return current.objectID != action.payload;
                })
            }
        case 'new_query':
            return {
                ...state,
                query:action.payload
            }
        case 'next_page_request':
            return{
                ...state,
                page:action.payload
            }
        case 'prev_page_request':
            return{
                ...state,
                page:action.payload
            }
    }

}
export default reducer