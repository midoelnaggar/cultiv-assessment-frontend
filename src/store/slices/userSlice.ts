import { IUserState } from "@/interfaces/userInterfaces";
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../thunks/userThunks";


const initialState: IUserState = {
    loading: false,
    token: null,
    userInfo: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state = initialState;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                state.token = action.payload.data?.token || null;
                state.userInfo = action.payload.data?.data || null;
            }
            state.loading = false;
        });
        builder.addCase(loginThunk.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(registerThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            if (action.payload.status === 201) {
                state.token = action.payload.data?.token || null;
                state.userInfo = action.payload.data?.data || null;
            }
            state.loading = false;
        });
        builder.addCase(registerThunk.rejected, (state) => {
            state.loading = false;
        });
    },
})

export default userSlice;