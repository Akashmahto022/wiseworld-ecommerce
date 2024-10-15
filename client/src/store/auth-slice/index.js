import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null
};

export const registerUser = createAsyncThunk('/auth/regiater',

    async(formData)=>{
        const response = await axios.post('')
    }
)



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action)=>{

        }
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer

