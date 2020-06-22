import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  //Insert Daily medications here
  transactions: [
    { id: 1, text: "Multi-vitamin", amount: 1 },
    { id: 2, text: "Tylenol", amount: 2 },
    { id: 3, text: "Fish Oil", amount: 1 },
    { id: 4, text: "Zimax", amount: 2 },
  ],

  transactions2: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  function addTransaction2(transaction2) {
    dispatch({
      type: "ADD_TRANSACTION2",
      payload: transaction2,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        transactions2: state.transactions2,
        deleteTransaction,
        addTransaction,
        addTransaction2,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
