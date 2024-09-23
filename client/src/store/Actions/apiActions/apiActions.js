import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";
export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await api.get('/users');
    return response?.data;
});

export const userLogin = createAsyncThunk('userLogin', async (values) => {
    const response = (await api.post('auth/login',
        {
            email: values.email,
            password: values.password
        },
        {
            'Content-Type': 'application/json'
        }
    ));
    console.log(response);
    return response.data;
})
export const userCreate = createAsyncThunk('userCreate', async (values) => {
    try {
        const response = await api.post('auth/signup', {
            firstName: (values.fullName).split(' ')[0],
            lastName: (values.fullName).split(' ')[1],
            email: values.email,
            password: values.password,
            phone: values.mobileNumber
        }, {
            'Content-Type': 'application/json',
        });
        const result = response.data;
        return result;
    } catch (error) {
        console.error('Error:', error)
    }
})