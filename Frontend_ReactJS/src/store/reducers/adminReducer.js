import actionTypes from '../actions/actionTypes';

const initialState = {
    categories: [],
    isLoading: false,
    products: [],
    members: [],

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_START:
            let copyState = {...state}
            copyState.categories =  action.data
            copyState.isLoading = true
            
            return {
                ...copyState
              
            }
        case actionTypes.FETCH_CATEGORIES_SUCCESS:
          
            state.categories =  action.data2
            state.isLoading = false
            // console.log('FETCH_CATEGORIES_SUCCESS', action)
            return {
                ...state
              
            }
        case actionTypes.FETCH_CATEGORIES_FAILED:
            // console.log('FETCH_CATEGORIES_FAILED', action)
            state.isLoading = false
            state.categories = []
            return {
                ...state
               
            }


        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            state.products =  action.data
            console.log('FETCH_PRODUCTS_SUCCESS', action)
            return {
                ...state
              
            }
        case actionTypes.FETCH_PRODUCTS_FAILED:
            console.log('FETCH_PRODUCTS_FAILED', action)
            
            state.products = []
            return {
                ...state
               
            } 


        case actionTypes.FETCH_MEMBERS_SUCCESS:
            console.log(action.data,"success")
            state.members =  action.data
            console.log('FETCH_MEMBERS_SUCCESS', action)
            return {
                ...state
              
            }
        case actionTypes.FETCH_MEMBERS_FAILED:
            console.log('FETCH_MEMBERS_FAILED', action)
            
            state.members = []
            return {
                ...state
               
            }
       
        
        default:
            return state;
    }
}

export default adminReducer;