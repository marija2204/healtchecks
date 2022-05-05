import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';


const store = configureStore({
    reducer: {auth: authReducer} //auth: authSlice.reducer
});


export default store;