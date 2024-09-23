import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Reducers/userReducers/userReducer';



const store = configureStore({
    reducer: {
        someReducer:userSlice.reducer
    }
});

export default store