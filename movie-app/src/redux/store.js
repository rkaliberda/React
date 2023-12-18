import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import movieReducer from './moviesSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, movieReducer);

const store = configureStore({
  reducer: {
    movies: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
