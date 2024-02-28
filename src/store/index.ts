import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import userSlice from "./slices/userSlice";
import contactSlice from "./slices/contactSlice";

const storage = createWebStorage("local");

const persistedReducer = persistReducer({ key: "root", storage, blacklist: ["contact"] },
    combineReducers({
        user: persistReducer({ key: "user", storage, blacklist: ["loading"] }, userSlice.reducer),
        contact: persistReducer({ key: "contact", storage, blacklist: ["loading"] }, contactSlice.reducer),
    })
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: { ignoreActions: true },
        });
    },
});

export const { logout } = userSlice.actions;
export const { resetContacts } = contactSlice.actions;

export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;