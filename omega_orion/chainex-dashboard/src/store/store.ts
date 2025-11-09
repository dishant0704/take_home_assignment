import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from "../features/dashboardSlice";
import modeReducer from "../features/ModeReducer";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    mode: modeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
