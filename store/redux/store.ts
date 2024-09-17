import { configureStore } from "@reduxjs/toolkit";
import userRegTokenReducer from "./appStateSlices/user-register-token-slice";

export const store = configureStore({
  reducer: {
    userRegToken: userRegTokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        warnAfter: 100, // Increase the warning threshold from 32ms to 100ms
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
