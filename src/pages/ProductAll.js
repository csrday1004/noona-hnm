import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productAction from "../redux/actions/productAction";


const ProductAll = ({setPage}) => {

  const products = useSelector((state)=>{
    console.log('state',state)
    return(state.product.products)})
    
  const navigate = useNavigate()
  const [query, setQuery] = useSearchParams()
  const searchQuery = query.get('q')||""
  const dispatch = useDispatch()
  const getProducts = async () => {
    dispatch(productAction.getProducts(searchQuery))
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
