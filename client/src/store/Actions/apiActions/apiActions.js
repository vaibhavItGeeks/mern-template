import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";
export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await api.get('/users');
    return response?.data;
})