
// 리덕스 툴킷 configureStore 쓰면서 필요없어짐.

// import { productActions } from "../reducers/productSlice";

// const getProducts = (searchQuery)=> {
//   return async (dispatch, getState)=>{
//     let url = `https://my-json-server.typicode.com/csrday1004/noona-hnm/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log(data)
//     // dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
//     dispatch(productActions.getAllProducts({data}))
//   }
// }

// const getDetail = (id) =>{
//   return async(dispatch,getState)=>{
//     let url = "https://my-json-server.typicode.com/csrday1004/noona-hnm";
//     let response = await fetch(url + `/products/${id}`);
//     let data = await response.json();
    
//     // dispatch({type:"GET_DETAIL", payload:{data}})
//     dispatch(productActions.getSingleProduct({data}))
//   }
// }

// const productAction = {getDetail}

// export default productAction