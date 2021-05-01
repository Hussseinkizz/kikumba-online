import { createContext, useContext, useReducer } from 'react'

// prepares the data cloud
export const StateContext = createContext()

// wrapping our app with it and providing the data to all
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// pulling data from the data cloud
export const useStateValue = () => useContext(StateContext)