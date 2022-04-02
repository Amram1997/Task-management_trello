import { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "../reducer";
const defaultState = {
  isLoggedIn: false,
  user: null,
  boards: [],
  tasks: [],
};

const Context = createContext(defaultState);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
export { defaultState, Context, ContextProvider };
