import { ILoginForm, IRegisterForm } from "@/interfaces/userInterfaces";
import userServices from "@/services/userServices";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const loginThunk = createAsyncThunk(
    "user/sign-in",
    async (data: ILoginForm, { rejectWithValue }) => {
        try {
            const res = await userServices.login(data);
            return res;

        } catch (err: any) {
            toast.error(err?.response?.data?.message?.toUpperCase(), { position: "bottom-left" })
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
            toast.error(err?.response?.data?.message?.toUpperCase(), { position: "bottom-left" })
            return rejectWithValue(err);
        }
    })