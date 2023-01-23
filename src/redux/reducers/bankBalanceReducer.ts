import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type InitialBankBalanceState = {
  balance: number;
};

const initialState: InitialBankBalanceState = {
  balance: 0,
};

const bankBalanceSlice = createSlice({
  name: 'balance',
  initialState: initialState,
  reducers: {
    withdrawDeposit: (state, action : PayloadAction<number>) => {
      console.log('transaction');
      state.balance += action.payload;
    },
    reset: (state) => {
      state.balance = 0;
    },
  },
  extraReducers: {},
});

export const {withdrawDeposit, reset} = bankBalanceSlice.actions;

export default bankBalanceSlice.reducer;
