const defaultState = {
    "access_token":""
} 

function reducer(state= defaultState, action){
    // console.log(action)
    switch(action.type){
        case 'SET_TOKEN':
        return {
            ...state,
            access_token:action.payload
        }
        default: return state
    }
}

export default reducer;