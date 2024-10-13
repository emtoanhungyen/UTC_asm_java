import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Container from "./pages/Container";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Category from "./pages/Catogory";
import { PATH } from "./routers/path";
import LayoutAdmin from "./components/admin/LayoutAdmin";
import AddCategory from "./components/admin/Category/AddCategory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PATH.HOME} element={<Container />}>
          <Route index element={<Home />} />
          <Route path={PATH.DETAIL} element={<Detail />} />
          <Route path={PATH.CATEGORY} element={<Category />} />
          <Route path={PATH.CART} element={<Cart />} />
        </Route>
        <Route path={PATH.ADMIN} element={<LayoutAdmin />}>
          <Route index element={<AddCategory />} />
        </Route>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTER} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
