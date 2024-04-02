const getProducts = (searchQuery)=> {
  return async (dispatch, getState)=>{
    let url = `https://my-json-server.typicode.com/csrday1004/noona-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)

    dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
  }
}

const getDetail = (id) =>{
  return async(dispatch,getState)=>{
    let url = "https://my-json-server.typicode.com/csrday1004/noona-hnm";
    let response = await fetch(url + `/products/${id}`);
    let data = await response.json();
    
    dispatch({type:"GET_DETAIL", payload:{data}})
  }
}

const productAction = {getProducts,getDetail}

export default productAction