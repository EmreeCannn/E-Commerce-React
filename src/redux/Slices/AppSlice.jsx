/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";



const initialState={
    loading:false,
}

export const AppSlice=createSlice({
    name:"app",
    initialState,
    reducers:{},
    
});

// eslint-disable-next-line no-empty-pattern
export const {} = AppSlice.actions

export default AppSlice.reducer