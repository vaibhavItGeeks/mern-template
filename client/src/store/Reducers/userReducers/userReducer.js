import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../Actions/apiActions/apiActions";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        isLoading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = "Something Went Wrong"
        })
    }
})
export const { } = userSlice.actions
export default userSlice;