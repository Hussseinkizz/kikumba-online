export const initialState = {
  cart: [],
  favs: []
}

//todo: use this selector after installing currency Format dependency
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
  switch (action.type) {
    // adding the parsed item to cart
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item]
      }

    // adding the parsed item to favorites
    case 'ADD_TO_FAVS':
      return {
        ...state,
        favs: [...state.favs, action.item]
      }

    // removing the selected item from cart
      case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(
        cartItem => cartItem.id === action.id
      )

      let newCart = [...state.cart]

      if(index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.warn(`product(id: ${action.id}) does not exist in cart!`)
      }

      return {
        ...state,
        cart: newCart
      }

    // removing the selected item from favorites
      case 'REMOVE_FROM_FAVS':
      const favIndex = state.favs.findIndex(
        favItem => favItem.id === action.id
      )

      let newFavs = [...state.favs]

      if(favIndex >= 0) {
        newFavs.splice(favIndex, 1)
      } else {
        console.warn(`product(id: ${action.id}) does not exist in favorites!`)
      }
      
      return {
        ...state,
        favs: newFavs
      }

      // controlling selected item quantity
      //todo: look for the right way to do this please!
      case 'INCREASE_QTY':
      const qtyIndex = state.cart.findIndex(
        cartItem => cartItem.id === action.id
      )
  
      // when incrementing item quantity, update item price in cart based on qty
      let qtyCart = [...state.cart]
        ++qtyCart[qtyIndex].quantity
        qtyCart[qtyIndex].price  *= qtyCart[qtyIndex].quantity // mabe like so

      return {
        ...state,
        cart: qtyCart
      } 
      
      case 'DECREASE_QTY':
      const qtyIndex2 = state.cart.findIndex(
        cartItem => cartItem.id === action.id
      )

      let qtyCart2 = [...state.cart]
      --qtyCart2[qtyIndex2].quantity
      qtyCart[qtyIndex].price  *= qtyCart[qtyIndex].quantity // mabe like so

      return {
        ...state,
        cart: qtyCart2
      }

      // removing all from cart
      //todo: look for an optimal way to do this
      case 'EMPTY_CART':
        let emptyCart = []
      return {
        ...state,
        cart: emptyCart
      }

      default: return state
  }
}

export default reducer