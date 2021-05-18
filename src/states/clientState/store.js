export const initialState = {
  cart: {},
  showMenu: false,
  isFav: false,
  isAdded: false
}


export const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_MENU':
      return {
        ...state,
        showNav: true
      }

    case 'HIDE_MENU':
      return {
        ...state,
        showNav: false
      }

    case 'TOGGLE_MENU':
      return {
        ...state,
        showMenu: !state.showMenu
      }

    case 'SET_IS_ADDED':
      return {
        ...state,
        isAdded: !state.isAdded
      } 

    case 'UPDATE_CART':
      return {
        ...state,
        cart: action.newCart
      } 

      default: return state
  }
}