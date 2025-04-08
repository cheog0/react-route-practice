import React, { useState, useEffect } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // CSS 분리 (또는 스타일 아래에 붙여도 OK)

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const menuList = [
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar-wrapper">
      <section className="top-section">
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </section>
      <section className="nav-section">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png"
          alt="H&M Logo"
        />
      </section>
      <section className="menu-area">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="검색" />
        </div>
        {isMobile ? (
          <select className="menu-dropdown">
            {menuList.map((menu, index) => (
              <option key={index} value={menu}>
                {menu}
              </option>
            ))}
          </select>
        ) : (
          <ul className="menu-list">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Navbar;
