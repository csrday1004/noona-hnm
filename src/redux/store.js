import { createStore, applyMiddleware } from "redux";
// import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store