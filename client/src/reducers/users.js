import {
    GET_USERS,
    GET_USERS_ERROR
  } from '../actions/types';


  const initialState = {
    users:[],
    loading: true,
    error: {},
  };


const userReducer = (state = initialState,{type,payload}) =>{
    switch(type){
        case GET_USERS:
            return {
                ...state,
                users:payload,
                loading:false
            }
        case GET_USERS_ERROR:
            return {
                ...state,
                error:payload,
                loading:false
            }
        default:
            return state;
    }
}

export default userReducer;
