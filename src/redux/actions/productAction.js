const getProducts = (searchQuery)=> {
  return async (dispatch, getState)=>{
    let url = `https://my-json-server.typicode.com/csrday1004/noona-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)

    dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
  }
}

const productAction = {getProducts}

export default productAction