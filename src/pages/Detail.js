import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DropDown from "../components/DropDown";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import productAction from "../redux/actions/productAction";

const Detail = () => {
  const { id } = useParams();
  const detail = useSelector(state=>state.product.detailProduct)
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch()

  const getProductDetail = async () => {
    dispatch(productAction.getDetail(id))
    setLoading(true);
  };

  useEffect(() => {
    getProductDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              src={detail?.img}
              alt={detail?.title}
            />
          </div>
          <div className="제품정보 product-info">
            <div className="제품명" style={{ fontSize: "20px" }}>
              {detail?.title}
            </div>
            <div className="가격" style={{ fontSize: "20px" }}>
              ₩{detail?.price.toLocaleString()}
            </div>
            <div className="초이스">
              {detail?.choice ? (
                <div className="choice">Conscious choice</div>
              ) : (
                <div className="choice">­</div>
              )}
            </div>
            <div className="사이즈선택">
              <DropDown sizes={detail?.size} />
            </div>
            <Button variant="dark" className="장바구니담기 add-cart">장바구니에 담기</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
