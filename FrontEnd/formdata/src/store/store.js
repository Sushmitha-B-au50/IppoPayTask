import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
import {dataReducer} from "../reducers/dataReducer";


const middleWares = [reduxThunk];

export const store = createStore(dataReducer,  
    applyMiddleware(...middleWares)
);