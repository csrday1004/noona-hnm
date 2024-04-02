let initialState = {
  id:'',
  pw:'',
  auth:false
}

function authReducer(state=initialState,action){
  let {type,payload} = action
  switch(type){
    case "LOGIN_SUCCESS":
      return{...state,id:payload.id, pw:payload.pw, auth:true}
    case "LOGOUT":
      return{...state,id:payload.id, pw:payload.pw, auth:false}
    default:
      return{...state}
  }
}

export default authReducer