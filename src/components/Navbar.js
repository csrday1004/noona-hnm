import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/authSlice";

const Navbar = ({
  setPage,
  categories,
  setMobileMenu,
  mobileMenu,
}) => {


  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth.auth)

  const navigate = useNavigate();
  
  const search = (e) => {
    // console.log(e.key)
    let keyword = e.target.value;
    // console.log(keyword)
    if (e.key === "Enter") {
      navigate(`/?q=${keyword}`);
    }
  };


  return (
    <div>
      {/* 모바일메뉴 버튼 */}
      <div className="flex nav-top">
        <div
          className="mobile-menu-button"
          onClick={() => {
            document.body.style.overflow = "hidden";
            setMobileMenu(true);
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt="메뉴버튼"
          />
        </div>

        {/* 로그인버튼 */}
        <div
          className="login-btn"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (auth === false) {
              navigate("/login");
            } else {
              setPage('/')
              dispatch(logout())
              navigate("/login");
            }
          }}
        >
          <FontAwesomeIcon icon={faUser} />{" "}
          {auth === true ? (
            <span style={{ color: "gray" }}>LogOut</span>
          ) : (
            <span>Login</span>
          )}
        </div>
      </div>

      <div className="로고 flex logo">
        <img
          onClick={() => {
            navigate("/");
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/330px-H%26M-Logo.svg.png"
          alt="로고"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="카테고리구역 category-box center">
        <ul className="카테고리 categories flex center">
          {categories.map((e, i) => {
            return (
              <li className="menu" key={i} style={{ cursor: "pointer" }}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="검색창 search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input
          onKeyDown={(e) => {
            search(e);
          }}
          type="text"
          placeholder="제품검색"
        />
      </div>
    </div>
  );
};

export default Navbar;
