import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        isLoading: false,
        error: null
    },
    reducers: {
        fetchUsersPending: (state) => {
            state.isLoading = true;
            console.log("i am fetch users pending method")
        },
        fetchUsersFulfilled: (state, action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.users = action.payload;
        },
        fetchUsersRejected: (state, action) => {
            state.isLoading = false;
            state.error = action.error
            console.log(" i am fetch users rejected method")
        }
    }
})
export const { fetchUsersPending, fetchUsersFulfilled, fetchUsersRejected } = userSlice.actions
export default userSlice;