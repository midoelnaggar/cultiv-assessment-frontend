import { IContactState } from "@/interfaces/contactInterfaces";
import { createSlice } from "@reduxjs/toolkit";
import {
    createContactThunk,
    updateContactThunk,
    deleteContactThunk,
    getAllContactThunk,
    getContactThunk
} from "../thunks/contactThunks";


const initialState: IContactState = {
    loading: false,
    contacts: []
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createContactThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createContactThunk.fulfilled, (state, action) => {
            if (action.payload.status === 201 && action.payload.data?.data) {
                state.contacts.push(action.payload.data.data);
                state.loading = false;
                return state;
            }
            state.loading = false;
        });
        builder.addCase(createContactThunk.rejected, (state) => {
            state.loading = false;
        });



        builder.addCase(updateContactThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateContactThunk.fulfilled, (state, action) => {
            if (action.payload.status === 200 && action.payload.data?.data?.id) {
                const contactIndex = state.contacts.findIndex(contact => {
                    return contact.id == action.payload.data.data.id;
                });
                if (contactIndex > -1) {
                    state.contacts[contactIndex] = action.payload.data.data;
                }
                state.loading = false;
                return state;
            }
            state.loading = false;
        });
        builder.addCase(updateContactThunk.rejected, (state) => {
            state.loading = false;
        });



        builder.addCase(deleteContactThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteContactThunk.fulfilled, (state, action) => {
            if (action.payload.status === 204 && action.payload.data?.id) {
                state.contacts.filter(contact => {
                    return contact.id !== action.payload.data.id;
                })
                state.loading = false;
                return state;
            }
            state.loading = false;
        });
        builder.addCase(deleteContactThunk.rejected, (state) => {
            state.loading = false;
        });



        builder.addCase(getContactThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getContactThunk.fulfilled, (state, action) => {
            if (action.payload.status === 200 && action.payload.data?.data?.id) {
                const contactIndex = state.contacts.findIndex(contact => {
                    return contact.id == action.payload.data.data.id;
                });
                if (contactIndex > -1) {
                    state.contacts[contactIndex] = action.payload.data.data;
                }
                state.loading = false;
                return state;
            }
            state.loading = false;
        });
        builder.addCase(getContactThunk.rejected, (state) => {
            state.loading = false;
        });


        builder.addCase(getAllContactThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllContactThunk.fulfilled, (state, action) => {
            if (action.payload.status === 200 && Array.isArray(action.payload.data?.data)) {
                state.contacts = action.payload.data.data;
            }
            state.loading = false;
        });
        builder.addCase(getAllContactThunk.rejected, (state) => {
            state.loading = false;
        });
    },
})

export default contactSlice;