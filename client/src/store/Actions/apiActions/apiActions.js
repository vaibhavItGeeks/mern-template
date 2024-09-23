import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";
export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await api.get('/users');
    return response?.data;
});

export const userLogin = createAsyncThunk('userLogin', async (values) => {
    const response = (await api.post('/auth/login',
        {
            username: values.username,
            password: values.password
        },
        {
            'Content-Type':'application/json'
        }
    ));
    console.log(response);
    return response.data;
})