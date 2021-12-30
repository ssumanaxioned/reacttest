import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import apiReducer from "./Reducers/apiReducer";
import selectedReducer from "./Reducers/selectedReducer";
import loginReducer from "./Reducers/loginReducer";

// function saveToLocalStorage(state) {
//   try {
//     const serialstate = JSON.stringify(state.selectedReducer.products)
//     localStorage.setItem('store', serialstate)
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serialstate = localStorage.getItem('store')
//     if(serialstate === null) return undefined;
//     return JSON.parse(serialstate);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

const rootReducer = combineReducers({
  apiReducer,
  selectedReducer,
  loginReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
// store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store;