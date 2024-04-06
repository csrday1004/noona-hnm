import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let initialState = {
  products:[],
  detailProduct:[],
  isLoading:false,
  error:null
}

export const fetchProducts = createAsyncThunk('product/fetchAll',async(searchQuery,thunkApi)=>{
  try{
    let url = `https://my-json-server.typicode.com/csrday1004/noona-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    return await response.json();
  }catch(error){
    thunkApi.rejectWithValue(error.message)
  }
})

export const fetchDetail = createAsyncThunk('product/fetchDetail',async(id,thunkApi)=>{
  try{
    let url = "https://my-json-server.typicode.com/csrday1004/noona-hnm";
    let response = await fetch(url + `/products/${id}`);
    return await response.json();
  }catch(error){
    thunkApi.rejectWithValue(error.message)
  }
})



const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
 
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state)=>{
      state.isLoading=true
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.isLoading=false
      state.products=action.payload
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
      state.isLoading=false
      state.error=action.payload
    })
    .addCase(fetchDetail.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.detailProduct = action.payload;
    })
    .addCase(fetchDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})

export const productActions = productSlice.actions
export default productSlice.reducer


// function productReducer(state=initialState,action){
//   let {type,payload} = action
//   switch(type){
//     case "GET_PRODUCT_SUCCESS":
//       return{...state,products:payload.data}
//     case "GET_DETAIL":
//       return{...state,detailProduct:payload.data}
//     default:
//       return{...state}
//   }
// }

// export default productReducer