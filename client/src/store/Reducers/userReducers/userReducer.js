import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, userCreate, userLogin } from "../../Actions/apiActions/apiActions";

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
        builder.addCase(userCreate.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(userCreate.fulfilled, (state, action) => {
            state.isLoading = false;
            // state.users = action.payload;
            console.log(action.payload)
        });
        builder.addCase(userCreate.rejected, (state, action) => {
            state.error = "Something Went Wrong"
        })

    }
})
export const { userState } = userSlice.actions
export default userSlice;