import { combineReducers } from "redux";
import { walletReducer } from "./WalletReducer";

const rootReducer = combineReducers({
  wallet: walletReducer,
});
export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;
