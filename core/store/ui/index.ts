import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UiState {
  resendEmailCount: number;
  resendEmailDelay: number;
  redirectUrl: string | null;
  isTest: boolean;
}

const initialState: UiState = {
  resendEmailCount: 0,
  resendEmailDelay: Date.now(),
  redirectUrl: null,
  isTest: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    increaseResendEmailCount: (state) => {
      if (state.resendEmailCount >= 4) {
        state.resendEmailCount = 0;
        state.resendEmailDelay = Date.now() + 3600000; // 3 600 000ms = 1hour
      } else {
        state.resendEmailCount = state.resendEmailCount
          ? state.resendEmailCount
          : 0;
        state.resendEmailCount += 1;
      }
    },
    setRedirectUrl: (state, action: PayloadAction<string | null>) => {
      state.redirectUrl = action.payload;
    },
    setTestIncidentsFilter: (state, action: PayloadAction<boolean>) => {
      state.isTest = action.payload;
    },
  },
});

export const { increaseResendEmailCount, setRedirectUrl, setTestIncidentsFilter } = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export default uiReducer;
