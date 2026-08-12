
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import esccomReducer from "./slices/esccomSlice";
import chatReducer from "./slices/chatSlice";

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

import storage from "redux-persist/lib/storage";

/**
 * ============================================================
 * ROOT REDUCER
 * ============================================================
 */

const rootReducer = combineReducers({
  chat: chatReducer,
  esccom: esccomReducer,
});

/**
 * ============================================================
 * REDUX PERSIST CONFIG
 * ============================================================
 *
 * Currently nothing is persisted.
 *
 * If you later want to persist a reducer, add its key
 * to the whitelist.
 */

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    // "chat",
    // "esccom",
  ],
};

/**
 * ============================================================
 * PERSISTED REDUCER
 * ============================================================
 */

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

/**
 * ============================================================
 * STORE
 * ============================================================
 */

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

/**
 * ============================================================
 * PERSISTOR
 * ============================================================
 */

export const persistor = persistStore(store);

/**
 * ============================================================
 * TYPES
 * ============================================================
 */

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;

