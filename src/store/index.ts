import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import userSlice from "./slices/userSlice";

const storage = createWebStorage("local");

const persistedReducer = persistReducer({ key: "root", storage },
    combineReducers({
        user: persistReducer({ key: "user", storage, blacklist: ["loading"] }, userSlice.reducer),
    })
);

const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: { ignoreActions: true },
            });
        },
    }
);

export const { logout } = userSlice.actions;

export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;