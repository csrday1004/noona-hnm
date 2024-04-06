// import { createStore, applyMiddleware } from "redux";
// import productReducer from "./reducers/productReducer";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";

// 리덕스 툴킷 configureStore 쓰면서 필요없어짐.

import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./reducers/productSlice";
import authSlice from "./reducers/authSlice";


// let store = createStore(rootReducer, applyMiddleware(thunk))
// creatStore는 이제 지원 안 하려고 함

const store = configureStore({
  reducer:{
    auth:authSlice,
    product:productSlice
  }
})

export default store