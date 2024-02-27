import { IContactForm } from "@/interfaces/contactInterfaces";
import contactServices from "@/services/contactsServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createContactThunk = createAsyncThunk(
    "contact/create",
    async (data: IContactForm, { rejectWithValue }) => {
        try {
            const res = await contactServices.create(data);
            return res;

        } catch (err: any) {
            return rejectWithValue(err);
        }
    });

export const updateContactThunk = createAsyncThunk(
    "contact/update",
    async (data: IContactForm, { rejectWithValue }) => {
        try {
            const res = await contactServices.update(data);
            return res;

        } catch (err: any) {
            return rejectWithValue(err);
        }
    });

export const deleteContactThunk = createAsyncThunk(
    "contact/delete",
    async (data: { id: string }, { rejectWithValue }) => {
        try {
            const res = await contactServices.delete(data);
            return res;

        } catch (err: any) {
            return rejectWithValue(err);
        }
    });

export const getContactThunk = createAsyncThunk(
    "contact/get",
    async (data: { id: string }, { rejectWithValue }) => {
        try {
            const res = await contactServices.get(data);
            return res;

        } catch (err: any) {
            return rejectWithValue(err);
        }
    });

export const getAllContactThunk = createAsyncThunk(
    "contact/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await contactServices.getAll();
            return res;

        } catch (err: any) {
            return rejectWithValue(err);
        }
    });