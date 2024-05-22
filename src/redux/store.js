import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistAuthConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

const persistContactsConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
