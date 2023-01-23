import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Transaction = {
  debitCredit: "debit" | "credit";
  value: number;
  bankBalance: number;
};

export type InitialBankTransactionState = {
  transactions: Transaction[];
};

const initialState: InitialBankTransactionState = {
  transactions: []
};

const bankTransactionSlice = createSlice({
  name: 'transaction',
  initialState: initialState,
  reducers: {
    addtransaction: (state, action : PayloadAction<Transaction>) => {
      state.transactions.push(action.payload)
    }
  },
  extraReducers: {},
});

export const {addtransaction} = bankTransactionSlice.actions;
export default bankTransactionSlice.reducer;
