import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

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

const Navbar = ({auth,setAuth}) => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div
        className="로그인상태 flex"
        style={{ justifyContent: "space-between" }}
      >
        <div className="검색창 search-bar">
          <FontAwesomeIcon icon={faSearch} /> 
          <input type="text" placeholder="제품검색" />
        </div>

        <div style={{cursor:'pointer'}} onClick={()=>{
          if(auth===false){
            navigate('/login')
          }
          else{
            setAuth(false)
          }
        }}>
          <FontAwesomeIcon icon={faUser} /> {auth===true?'로그아웃':'로그인'}
        </div>

        
      </div>
      <div className="로고 flex logo" >
        <img
        onClick={()=>{
          navigate('/')
        }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/330px-H%26M-Logo.svg.png"
          alt="로고"
          style={{cursor:'pointer'}}
        />
      </div>
    <div className="카테고리구역 category-box center">
      <ul className="카테고리 categories flex center">
        {categories.map((e, i) => {
          return (
            <li className="menu" key={i} style={{ cursor:'pointer'}}>
              {e}
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
