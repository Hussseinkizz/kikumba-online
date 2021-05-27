export const initialState = {
  showMenu: false,
  isFav: false,
  isAdded: false
}


export const reducer = (state, action) => {
  switch (action.payload) {
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

      default: return state
  }
}

// on setting is added, validate the target index or stamp it, then toggle state