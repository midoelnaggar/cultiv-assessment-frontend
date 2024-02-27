import { ILoginForm, IRegisterForm } from "@/interfaces/userInterfaces";
import userServices from "@/services/userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
    "user/sign-in",
    async (data: ILoginForm, { rejectWithValue }) => {
        try {
            const res = await userServices.login(data);
            return res;

        } catch (err: any) {
            return rejectWithValue(err);
        }
    })

export const registerThunk = createAsyncThunk(
    "user/sign-up",
    async (data: IRegisterForm, { rejectWithValue }) => {
        try {
            const res = await userServices.register(data);
            return res;

        } catch (err: any) {
            return rejectWithValue(err);
        }
    })