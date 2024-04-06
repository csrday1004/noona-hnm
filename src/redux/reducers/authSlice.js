import { createSlice } from "@reduxjs/toolkit"

let initialState = {
  id:'',
  pw:'',
  auth:false
}

export const login = ( id, pw ) => {
  return (dispatch, getState) => {
    dispatch(authActions.logIn({ id, pw }));
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch(authActions.logOut());
  };
};


const authSlice =  createSlice({
  name:'auth',
  initialState,
  reducers:{
  logIn(state,action){
    console.log(action)
    state.id = action.payload.id
    state.pw = action.payload.pw
    state.auth=true
  },
  logOut(state){
    state.id = ""
    state.pw = ""
    state.auth=false
  }
}
})

// console.log('authSlice',authSlice)



export const authActions = authSlice.actions
export default authSlice.reducer
// reducers가 아님. 그렇게 약속했다함
