import { createSlice } from "@reduxjs/toolkit";
import { forgotpassword, userCreate } from "../../Actions/apiActions/apiActions";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        isLoading: false,
        error: null,
        isLogin: false,
        user: {}
    },
    reducers: {
        userState: (state, method) => {
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userCreate.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(userCreate.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(userCreate.rejected, (state, action) => {
            state.error = "Something Went Wrong"
            state.isLoading = false;
        })

        builder.addCase(forgotpassword.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(forgotpassword.fulfilled, (state, action) => {
            state.isLoading = false;
        });
        builder.addCase(forgotpassword.rejected, (state, action) => {
            state.error = "Something Went Wrong"
            state.isLoading = false;
        })
    }
})
export const { userState } = userSlice.actions
export default userSlice;