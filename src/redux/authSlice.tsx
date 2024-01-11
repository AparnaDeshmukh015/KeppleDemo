import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from 'axios';

import { encrypt } from "../helper/encryption_decryption";

interface IncDecInitialStateType {
  data: [],
  loading: boolean
  apiNumber: number | null
  errorStatus: number | null
  message: null,
  status:null
} // the type of the initial state of slice.

const initialState: IncDecInitialStateType = {
  data: [],
  loading: false,
  apiNumber: null,
  errorStatus: null,
  message: null,
  status:null
}
   
export const getUserLogin:any = createAsyncThunk('',  async (userData, thunkApi) => {
   
     console.log(userData, 5444);
    try {
       
        var encryptdata = encrypt(userData);
      const  response = await axios.post(`http://192.168.1.27:2703/api/Login/login`, JSON.parse(encryptdata) );
      const data = await response.data;
     if(response.status === 200){
      localStorage.setItem('token', data.SESSION_ID);
      localStorage.setItem('_id', data.USER_ID);
     }
     return thunkApi.fulfillWithValue(response)
    } catch (error) {
    //   return rejectWithValue(error.message);
    }
  
})



export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
     extraReducers:customer =>{
      
        customer.addCase(getUserLogin.fulfilled, (state, action) => {
           state.status=action?.payload?.status;
          });
     },
})


export default authSlice.reducer