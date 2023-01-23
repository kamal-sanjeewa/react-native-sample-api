import {combineReducers} from 'redux';
import bankTransactionReducer from './bankTransactionReducer';
import bankBalanceReducer from './bankBalanceReducer';

const rootReducer = combineReducers({
  bankBalanceReducer: bankBalanceReducer,
  bankTransactionReducer: bankTransactionReducer,
});
export default rootReducer;

export type ApplicationState = ReturnType<typeof rootReducer>;
