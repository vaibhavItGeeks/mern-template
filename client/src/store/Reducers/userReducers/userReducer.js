import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, userLogin } from "../../Actions/apiActions/apiActions";

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
        // builder.addCase(fetchUsers.pending, (state, action) => {
        //     state.isLoading = true;
        // });
        // builder.addCase(fetchUsers.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.users = action.payload;
        // });
        // builder.addCase(fetchUsers.rejected, (state, action) => {
        //     state.error = "Something Went Wrong"
        // })
        builder.addCase(userLogin.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLogin = true;
            state.user = action.payload
        });
        builder.addCase(userLogin.rejected, (state, action) => {
            state.error = "Invalid Credentials"
        })
    }
})
export const { userState } = userSlice.actions
export default userSlice;