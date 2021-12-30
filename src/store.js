import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import apiReducer from "./Reducers/apiReducer";
import loginReducer from "./Reducers/loginReducer";

const rootReducer = combineReducers({
  apiReducer,
  loginReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;