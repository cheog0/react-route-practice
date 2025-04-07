import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
// 1. 전체 상품페이지, 로그인 ,상품상세 페이지
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로그인이 안되어있을 경우에는 로그인페이지가 먼저 나온다.

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
