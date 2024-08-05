import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers:{
        addMessage: (state,action)=>{
            // state.messages.splice(12,1); 
            state.messages.splice(LIVE_CHAT_COUNT,1); 
            // splice will restrict our array length to be 12 and remove 1 message after 12 from the top so that our browser/ appliction will not crash 
            state.messages.push(action.payload); // adding chat messages in the front of array
        },
    },
});



export const{addMessage} = chatSlice.actions;
export default chatSlice.reducer;