import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import productAction from "../redux/actions/productAction";
import { fetchDetail, fetchProducts } from "../redux/reducers/productSlice";


const ProductAll = ({setPage}) => {

  const products = useSelector((state)=>{
    // console.log('state',state)
    return(state.product.products)})
    
  const navigate = useNavigate()
  const [query, setQuery] = useSearchParams()
  const searchQuery = query.get('q')||""
  const dispatch = useDispatch()

  const getProducts = async () => {
    dispatch(fetchProducts(searchQuery))
  };

  const getProductDetail = async (id) => {
    dispatch(fetchDetail(id));
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {
      products.length>0?(
      products.map((e, i) => {
        return (
          <div className="product-cardbox" onClick={()=>{
            getProductDetail(e.id)
            setPage(`/detail/${e.id}`)
            navigate(`/detail/${e.id}`)
          }} key={i}>
              <ProductCard data={e} />
          </div>
        );
      }
      )):null
    }
    </div>
  );
};

export default ProductAll;
