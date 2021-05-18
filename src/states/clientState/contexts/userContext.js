// import { createContext, useContext, useReducer } from 'react'

// export default function makeStore( reducer, initialState ) {

//   // preparing the data layers
//   const storeContext = createContext()
//   const dispatchContext = createContext()
  
  
  
//   // wrapping our app with the layers and providing the data to all
//   const StoreProvider = ({ children }) => {
//     const [store, dispatch] = useReducer(reducer, initialState)
    
//     return (
//       <dispatchContext.Provider value={dispatch}>
//         <storeContext.Provider value={store}>
//           {children}
//         </storeContext.Provider>
//       </dispatchContext.Provider>
//     )
//   }
  
//   // preparing the hooks for use...
//   function useStore() {
//     return useContext(storeContext)
//   }
  
//   function useDispatch() {
//       return useContext(dispatchContext)
//   }
//   return [ StoreProvider, useStore, useDispatch ]
// }

// import makeStore from '../store'

// const initalState = {
//   user: {
//         someUserInfo: 'like name'
//     }
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     // do a  user dispatch case
//         // return new state
//   }
// }

// const [
//   UserProvider,
//   useUserStore,
//   useUserDispatch
// ] = makeStore(reducer, initalState)

// export { UserProvider, useUserStore, useUserDispatch }

// // USE CASE EXAMPLES
// // // App.js
// // import React from 'react';
// // import { UserProvider } from './userStoreContext';

// // function App() {
// //   return (
// //     <UserProvider>
// //       <Navbar />
// //       ...
// //     </UserProvider>
// //   );
// // }

// // // Login.js
// // import React from 'react';
// // import { useUserDispatch } from './userStoreContext'

// // function Login() {
// //     const dispatch = useUserDispatch()
// //     ...
// //     function handleSubmit() {
// //         ...
// //         dispatch(...)
// //     }
// // }

// // // Navbar.js
// // import React from 'react';
// // import { useUserStore } from './userStoreContext'

// // function Navbar() {
// //   const {user} = useUserStore()
// //   return (
// //     ...
// //     <li>{user.name}</li>
// //   )
// // }