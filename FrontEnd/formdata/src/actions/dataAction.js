import * as types from "./actionType";
import  axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000/'});




const Adddata = (data) =>(
    {
        type:types.ADD_DATA

    });


export const addData=(values) => async dispatch =>
{
    debugger;
     try{
        const response = await API.post('users/',values)
        dispatch(Adddata(response));
        return response;
     }
    catch(err){
                return err;
             }
}