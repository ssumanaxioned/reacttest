const initialState = {
  isLoading: true,
  data: [],
  filter: [],
  error: '',
}

const apiReducer =(state = initialState, action)=> {
  switch(action.type) {
    case 'FETCH_API_REQUEST':
      return {
        ...state, isLoading: true
      }
    case 'FETCH_API_SUCCESS': 
    return {
      ...state, data: action.payload, filter: action.payload , isLoading: false
    }

    case 'FETCH_API_FAILURE':
      return {
        ...state, error: action.payload, isLoading: false
      }

    case 'FILTER_PRODUCTS' :
      return {
        ...state, filter: state.data.filter(item=> (item.title.toLowerCase().includes(action.payload.toLowerCase())))
      }
    default: return state
  }
}

export default apiReducer