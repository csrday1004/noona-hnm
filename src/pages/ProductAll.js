import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let url = "https://my-json-server.typicode.com/csrday1004/noona-hnm";
    let response = await fetch(url+"/products");
    let data = await response.json();
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
          <div className="product-cardbox" key={i}>
            <ProductCard data={e} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductAll;
