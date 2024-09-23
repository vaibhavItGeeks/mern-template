import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";
import { fetchUsersFulfilled, fetchUsersPending, fetchUsersRejected } from "../../Reducers/userReducers/userReducer";
import { useDispatch } from "react-redux";
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await api.get('/users');
    return response;
})