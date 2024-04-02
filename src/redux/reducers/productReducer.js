let initialState = {
  products:[],
  detailProduct:[]
}

function productReducer(state=initialState,action){
  let {type,payload} = action
  switch(type){
    case "GET_PRODUCT_SUCCESS":
      return{...state,products:payload.data}
    case "GET_DETAIL":
      return{...state,detailProduct:payload.data}
    default:
      return{...state}
  }
}

export default productReducer