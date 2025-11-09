import { createSlice } from '@reduxjs/toolkit';

interface DashboardState {
  earnings: number;
  spending: number;
}

const initialState: DashboardState = {
  earnings: 6750,
  spending: 2520,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
