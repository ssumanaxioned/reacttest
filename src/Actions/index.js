import axios from "axios"

export const fetchApiRequest =()=> {
  return {
    type: 'FETCH_API_REQUEST'
  }
}

export const fetchApiFailure =error=> {
  return {
    type: 'FETCH_API_FAILURE',
    payload: error
  }
}

export const fetchApiSuccess =data=> {
  return {
    type: 'FETCH_API_SUCCESS',
    payload: data
  }
}

export const fetchAPI =url=>{
  return (dispatch) => {
    dispatch(fetchApiRequest)
    axios.get(url)
    .then(response => {
      const weather = response.data
      dispatch(fetchApiSuccess(weather))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchApiFailure(errorMsg))
    })
  }
} 

export const login =(user)=> {
  return {
    type: 'LOGIN',
    payload: user
  }
}

export const logout =()=> {
  return {
    type: 'LOGOUT'
  }
}

export const filterProducts =value=> {
  return {
    type: 'FILTER_PRODUCTS',
    payload: value
  }
}