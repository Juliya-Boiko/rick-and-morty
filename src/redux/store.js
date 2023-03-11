import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { charactersSlice } from "./characters/charactersSlice";
import { authSlice } from "./auth/authSlice";

const charactersPersistConfig = {
  key: 'characters',
  storage,
  whitelist: ['filter', 'items'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['displayName', 'uid', 'accesToken', 'isLogged'],
};

export const store = configureStore({
  reducer: {
    characters: persistReducer(charactersPersistConfig, charactersSlice.reducer),
    auth: persistReducer(authPersistConfig, authSlice.reducer)
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);