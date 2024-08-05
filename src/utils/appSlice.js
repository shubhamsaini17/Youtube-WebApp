// sidebar colps karna ka liya ha ye slice for our redux store
import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice ({
    name: "app",
    initialState: {
        isMenuOpen: true, // isMenuOpen - sidebar
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state)=> {
            state.isMenuOpen = false;
        },
        getVideoId: (state)=> {
        
        },
    },
});
 
export const{toggleMenu,closeMenu } = appSlice.actions;
export default appSlice.reducer;
