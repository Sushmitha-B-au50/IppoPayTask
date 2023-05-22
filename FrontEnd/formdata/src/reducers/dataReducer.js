import * as types from "../actions/actionType"

const initialState = {
    data:[],
}

export const  dataReducer = (state = initialState,action) =>
{
    switch (action.type) {
        case types.ADD_DATA:
            return{
                ...state,
                loading:false,
                data:action.payload,
            }
        default:
            return state;
    }     

}
