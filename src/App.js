import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { PrivateRoute } from "./route/PrivateRoute";
import MobileMenu from "./components/MobileMenu";

//1. 전체상품 페이지, 로그인, 상품상세페이지
// 1-1.네비게이션바 만들기
//2. 메인페이지에서 전체상품 볼 수 있다
//3. 로그인 버튼 누르면 로그인 페이지
//4. 로그인 안하면 상세페이지 못 보고 로그인페이지로 이동
//5. 로그인 되어있으면 상세페이지 접근 가능
//6. 로그아웃 버튼 누르면 로그아웃
//7. 로그아웃되면 상품디테일 페이지 못 보고 로그인 페이지로 이동
//8. 로그인 하면 로그아웃 버튼 보여주기
//9. 상품 검색

function App() {
  const [auth, setAuth] = useState(false);
  const [page, setPage] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);



  const categories = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  useEffect(() => {
    console.log(mobileMenu);
  }, [auth, page, mobileMenu]);

  return (
    <div 
      className="App"
      style={{ maxWidth: "1000px", margin: "auto", padding: "30px",position:'relative'}}
    >
      {mobileMenu ? <MobileMenu categories={categories} setMobileMenu={setMobileMenu}/> : null}

      <Navbar auth={auth} setAuth={setAuth} setPage={setPage} categories={categories} setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/>
      
      <Routes>
        <Route path="/" element={<ProductAll  setPage={setPage} />} />
        <Route path="/detail/:id" element={<PrivateRoute auth={auth} />} />
        <Route
          path="/login"
          element={<Login setAuth={setAuth} page={page} />}
        />
      </Routes>
    </div>
  );
}

export default App;
