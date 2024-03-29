import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";


const ProductAll = ({setPage}) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const [query, setQuery] = useSearchParams()
  const searchQuery = query.get('q')||""
  
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/csrday1004/noona-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
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
      // (<div className="" style={{width:'100%',textAlign:'center'}}>
      //   <img width={'100%'} src="https://www.turista.co.kr/images/user/nodata.png" alt="검색결과없음"/>
      //   </div>)
    }
    </div>
  );
};

export default ProductAll;
