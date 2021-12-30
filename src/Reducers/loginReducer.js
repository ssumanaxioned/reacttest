const initialState = {
  isLogin: false,
  username: ''
}

const loginReducer =(state = initialState, action)=> {
  switch(action.type) {
    case 'LOGIN' : 
    return {
      ...state, isLogin: true, username: action.payload
    }
    case 'LOGOUT' :
      return {
        ...state, isLogin: false
      }
    default: return state
  }
}

export default loginReducer;