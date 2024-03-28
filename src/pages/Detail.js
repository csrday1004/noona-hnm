import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DropDown from "../components/DropDown";
import { Button } from "react-bootstrap";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(false);

  const getProductDetail = async () => {
    let url = "https://my-json-server.typicode.com/csrday1004/noona-hnm";
    let response = await fetch(url + `/products/${id}`);
    let data = await response.json();
    setDetail(data);
    console.log(data);
    setLoading(true);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          className="flex"
          style={{ width: "100%", flexWrap: "wrap", marginBottom: "200px" }}
        >
          <div className="제품이미지 product-image">
            <img
              style={{ width: "100%" }}
              src={detail.img}
              alt={detail.title}
            />
          </div>
          <div className="제품정보 product-info">
            <div className="제품명" style={{ fontSize: "20px" }}>
              {detail.title}
            </div>
            <div className="가격" style={{ fontSize: "20px" }}>
              ₩{detail.price.toLocaleString()}
            </div>
            <div className="초이스">
              {detail.choice ? (
                <div className="choice">Conscious choice</div>
              ) : (
                <div className="choice">­</div>
              )}
            </div>
            <div className="사이즈선택">
              <DropDown sizes={detail.size} />
            </div>
            <Button variant="dark" className="장바구니담기 add-cart">장바구니에 담기</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
