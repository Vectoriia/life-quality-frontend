import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UiState {
  resendEmailCount: number;
  resendEmailDelay: number;
  isRegular?: boolean; 
  isSingle?: boolean;
  isChol?: boolean; 
  isGen?: boolean; 
  isSug?: boolean; 
  redirectUrl: string | null;
  isTest: boolean;
}

const initialState: UiState = {
  resendEmailCount: 0,
  resendEmailDelay: Date.now(),
  isChol: undefined,
  isGen: undefined,
  isRegular: undefined,
  isSingle: undefined,
  isSug: undefined,
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
    setIsRegularFilter: (state, action: PayloadAction<boolean | undefined>) => {
      state.isRegular = action.payload;
    },
    setIsSingleFilter: (state, action: PayloadAction<boolean | undefined>) => {
      state.isSingle = action.payload;
    },
    setIsCholFilter: (state, action: PayloadAction<boolean | undefined>) => {
      state.isChol = action.payload;
    },
    setIsSugFilter: (state, action: PayloadAction<boolean | undefined>) => {
      state.isSug = action.payload;
    },
    setIsGenFilter: (state, action: PayloadAction<boolean | undefined>) => {
      state.isGen = action.payload;
    },
  },
});

export const { 
  increaseResendEmailCount,
  setRedirectUrl,
  setTestIncidentsFilter, 
  setIsCholFilter, 
  setIsGenFilter, 
  setIsRegularFilter, 
  setIsSingleFilter, 
  setIsSugFilter 
} = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export default uiReducer;
