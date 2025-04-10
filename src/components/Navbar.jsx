import React, { useState, useEffect } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

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

  const goToLogin = () => navigate("/login");
  const goToLogout = () => {
    setAuthenticate(false);
    navigate("/");
  };
  const goToHome = () => navigate("/");

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="navbar-wrapper">
      <section className="top-section">
        <div
          className="login-button"
          onClick={authenticate ? goToLogout : goToLogin}
        >
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </section>

      <section className="nav-section">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png"
          alt="H&M Logo"
          onClick={goToHome}
        />
      </section>

      <section className="menu-area">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="검색" onKeyDown={(e) => search(e)} />
        </div>

        {isMobile ? (
          <>
            <div className="hamburger-icon" onClick={() => setShowMenu(true)}>
              ☰
            </div>
            <div className={`mobile-menu ${showMenu ? "show" : ""}`}>
              <div className="close-button" onClick={() => setShowMenu(false)}>
                ✕
              </div>
              <ul>
                {menuList.map((menu, index) => (
                  <li key={index}>{menu}</li>
                ))}
              </ul>
            </div>
          </>
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
