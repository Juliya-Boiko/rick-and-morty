import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { charactersSlice } from "./charactersSlice";

const persistConfig = {
  key: 'characters',
  storage,
  whitelist: ['filter'],
};

export const store = configureStore({
  reducer: {
    characters: persistReducer(persistConfig,  charactersSlice.reducer),
    //theme: themeSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);