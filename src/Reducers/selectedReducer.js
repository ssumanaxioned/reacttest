const initialState = {
  products: []
}

const selectedReducer =(state = initialState, action)=> {
  console.log('action', action);
  switch(action.type) {
    case 'ADD_TO_CART': 
    return {
      ...state, products: state.products.concat(action.payload)
    }
    case 'Remove_FROM_CART':
      return {
        ...state, products: state.products.filter(product=> product !== action.payload)
      }
    default: return state;
  }
}

export default selectedReducer