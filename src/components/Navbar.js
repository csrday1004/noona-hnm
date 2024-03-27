import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const categories = ['여성', 'Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']

const Navbar = () => {
  return (
    <div>
     
      <div
        className="1로그인상태 flex"
        style={{ justifyContent: "space-between" }}
      >
         <div className="검색창">
        <FontAwesomeIcon icon={faSearch} />{" "}
        <input type="text" />
        </div>
        
        <div><FontAwesomeIcon icon={faUser} />{" "}로그인</div>
      </div>
      <div
        className="2로고 flex"
        style={{ justifyContent: "center", height:'80px', padding:'20px' }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/330px-H%26M-Logo.svg.png" alt="로고"/>
      </div>
      <div className="3카테고리+검색버튼 flex center">
        <ul className="카테고리모음 flex center" style={{listStyle:'none', flexWrap:'wrap'}}>
          {categories.map((e,i)=>{
          return(
            <li className="menu" key={i}>{e}</li>
          )
        })}
     </ul>
        
      </div>
      
    </div>
  );
};

export default Navbar;
