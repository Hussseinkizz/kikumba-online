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
      //todo: look for the better way to do this please!
      case 'INCREASE_QTY':

      return {
        cart: state.cart.map(cartItem => 
          cartItem.id === action.id ? {...cartItem, 
            quantity : cartItem.quantity + 1, 
            price : cartItem.price * cartItem.quantity} : cartItem
            )
          }

          
          case 'DECREASE_QTY':
            
            return {
              cart: state.cart.map(cartItem => 
                cartItem.id === action.id ? {...cartItem, 
                  quantity : cartItem.quantity - 1, 
                  price : cartItem.price * cartItem.quantity} : cartItem
                  )
                }

                case 'UPDATE_PRICE':
          
                return {
                  cart: state.cart.map(cartItem => 
                    cartItem.id === action.id ? {...cartItem, 
                      price : cartItem.price * cartItem.quantity} : cartItem
                      )
                    }

      // removing all from cart
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