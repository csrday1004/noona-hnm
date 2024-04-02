const login = (id,pw) =>{
  return(dispatch,getState)=>{
    // console.log('로긴성공')
    dispatch({type:"LOGIN_SUCCESS", payload:{id,pw}})
  }
}

const logOut = ()=>{
  return(dispatch,getState)=>{
    dispatch({type:"LOGOUT", payload:{id:'',pw:''}})
  }
}

export const authAction = {login,logOut}