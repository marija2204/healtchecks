import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: localStorage.getItem("isLoggedIn"),
    isAdmin: localStorage.getItem("AdminIsLoggedIn")
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
            localStorage.setItem("isLoggedIn", true);
        },
        logout(state) {
            state.isAuthenticated = false;
            state.isAdmin = false;
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("AdminIsLoggedIn");
        },
        isAuthenticated(state){
            if(localStorage.getItem("isLoggedIn")){
                state.isAuthenticated = true;
            }
        },
        isAdminLogin(state){
            state.isAdmin= true;
            localStorage.setItem("AdminIsLoggedIn", true);
            // if(localStorage.getItem("AdminIsLoggedIn")){ 
            // state.isAdmin= true;
            // }
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;