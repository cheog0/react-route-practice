import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./source/PrivateRoute";
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <>
      <div>
        <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route
            path="/login"
            element={<Login setAuthenticate={setAuthenticate} />}
          />
          <Route
            path="/product/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
