// import { createStore, applyMiddleware } from "redux";
// import productReducer from "./reducers/productReducer";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";

// 리덕스 툴킷 configureStore 쓰면서 필요없어짐.

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import productSlice from "./reducers/productSlice";


// let store = createStore(rootReducer, applyMiddleware(thunk))

const store = configureStore({
  reducer:{
    auth:authReducer,
    product:productSlice
  }
})

export default store