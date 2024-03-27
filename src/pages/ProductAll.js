import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {products.map((e, i) => {
        return (
          <div key={i} style={{width:'25%'}}>
            <ProductCard data={e} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductAll;