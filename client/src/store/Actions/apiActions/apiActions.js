import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/api";
import toast from "react-hot-toast";
export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await api.get('/users');
    return response?.data;
});

export const userLogin = createAsyncThunk('userLogin', async (values) => {
    try {
        const response = (await api.post('auth/login',
            {
                email: values.email,
                password: values.password
            },
            {
                'Content-Type': 'application/json'
            }
        ));
        if (response.data.status) toast.success(response.data.message)
        else toast.error(response.data.message)
        return response.data;
    } catch (error) {
        console.error('Error:', error)
        toast.error(error.response.data.message)
    }
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
        if (response.data.status) toast.success(response.data.message)
        else toast.error(response.data.message)
        return response.data;
    } catch (error) {
        console.error('Error:', error)
        toast.error(error.response.data.message)
    }
})
export const forgotpassword = createAsyncThunk('forgotpassword', async (values) => {
    console.log(values)
    try {
        const response = await api.post('auth/forget', {
            email: values,
        }, {
            'Content-Type': 'application/json',
        });
        if (response.data.status) toast.success(response.data.message)
        else toast.error(response.data.message)
        return response.data;
    } catch (error) {
        console.error('Error:', error)
        toast.error(error.response.data.message)
    }
})
export const createNewpassword = createAsyncThunk('createNewpassword', async (values) => {
    console.log(values)
    try {
        const response = await api.put(`auth/reset/${values.id}`, {
            password: values.password,
        }, {
            'Content-Type': 'application/json',
        });
        if (response.data.status) toast.success(response.data.message)
        else toast.error(response.data.message)
        return response.data;
    } catch (error) {
        console.error('Error:', error)
        toast.error(error.response.data.message)
    }
})