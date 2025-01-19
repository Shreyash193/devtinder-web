import { createSlice } from "@reduxjs/toolkit";
import Feed from "../Feed";


const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            
            return action.payload;
        },
        removeFeed:(state,action)=>{
            return null;
        }
    }
});

export const {addFeed,removeFeed} =feedSlice.actions;

export default feedSlice.reducer;