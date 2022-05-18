import { useEffect, useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import Actions from "../contextActions";
import { Transaction, TransactionsService } from "services/TransactionsService";
import mockData from "utils/constants";

import initAppState from "./initAppState";

export interface IAppState {
  transactions: Array<Transaction>;
}
export interface IPastTransactions {
  date: string;
  amount: string;
  recipient: string;
}

const pastTransactions: Array<IPastTransactions> = Object.values(
  mockData.pastTransactions
);

const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);
  const transactionsServices = new TransactionsService(initAppState);

  const setState = (newState: IAppState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };

  const addTransaction = (transaction: Transaction) => {
    transactionsServices.addTransaction(transaction);
    setState({ transactions: [...state.transactions, transaction] });
  };

  const transformAndPopulateTransactions = () => {
    pastTransactions.forEach((transaction, idx) => {
      addTransaction({
        id: idx,
        to: transaction.recipient,
        from: mockData.publicAddress,
        value: Number(transaction.amount),
        date: transaction.date,
      });
    });
    transactionsServices
      .getListOfTransactions()
      .then((data) => setState({ transactions: data }));
  };

  useEffect(() => {
    transformAndPopulateTransactions();
    //eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
