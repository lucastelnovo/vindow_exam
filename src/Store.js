import React, { createContext, useReducer } from "react";

const initialState = {
  results: [],
  query: null,
  showSpinner: false,
  activePage: 1,
};

const Store = createContext(initialState);
const { Provider } = Store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState;
    console.log("[DISPATCH]: ", action);
    switch (action.type) {
      case "SET_RESULTS":
        newState = {
          ...state,
          results: action.payload,
        };
        return newState;
      case "SET_QUERY":
        newState = {
          ...state,
          query: action.payload,
        };
        return newState;
      case "SHOW_SPINNER":
        newState = {
          ...state,
          showSpinner: action.payload,
        };
        return newState;
      case "SET_ACTIVE_PAGE":
        newState = {
          ...state,
          activePage: action.payload,
        };
        return newState;

      default:
        throw new Error("invalid dispatch");
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { Store, StateProvider };
