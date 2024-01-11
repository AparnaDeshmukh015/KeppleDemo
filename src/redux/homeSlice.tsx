import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from 'axios';
import {auth} from '../helper/auth';
import { encrypt } from "../helper/encryption_decryption";

interface IncDecInitialStateType {
  data: [],
  loading: boolean
  apiNumber: number | null
  errorStatus: number | null
} // the type of the initial state of slice.

const initialState: IncDecInitialStateType = {
  data: [],
  loading: false,
  apiNumber: null,
  errorStatus: null
}

let custData = {
    "USER_ID":21,
    "CLIENT_ID":0,
    "PAGE_NUMBER":1,
    "PAGE_SIZE":10,
    "SEARCH_TEXT":""
    };

   
         
   
      
      
export const getUserList:any = createAsyncThunk('',  async (_, thunkApi) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        "access_token": auth(),
        "_id": localStorage.getItem('_id')
      };
        var encryptdata = encrypt(custData);
      const  response = await axios.post(`http://192.168.1.27:2703/api/SMS/getsmsmasterlist`, JSON.parse(encryptdata) ,{headers});
      const data = await response.data;
     return thunkApi.fulfillWithValue(data[0])
    } catch (error) {
    //   return rejectWithValue(error.message);
    }
  })



export const homeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
     extraReducers:customer =>{
      
        customer.addCase(getUserList.fulfilled, (state, action) => {
          state.data = action?.payload?.SMS_Master_list; // this line is getting error
          });
     },
})


export default homeSlice.reducer