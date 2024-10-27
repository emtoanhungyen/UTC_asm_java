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
import AddProduct from "./components/admin/Products/AddProduct";
import AddUser from "./components/admin/Users/AddUser";
import TableCategory from "./components/admin/Category/TableCategory";
import TableProducts from "./components/admin/Products/TableProducts";
import TableUsers from "./components/admin/Users/TableUsers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import EditCategory from "./components/admin/Category/EditCategory";
import EditProduct from "./components/admin/Products/EditProduct";

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
        {/* Admin */}
        <Route path={PATH.ADMIN} element={<LayoutAdmin />}>
          <Route index element={<TableCategory />} />
          <Route path={PATH.ADD_CATEGORY} element={<AddCategory />} />
          <Route path={PATH.ADMIN_PRODUCTS} element={<TableProducts />} />
          <Route path={PATH.ADD_PRODUCTS} element={<AddProduct />} />
          <Route path={`${PATH.UPDATE_CATEGORY}/:id`} element={<EditCategory />} />
          <Route path={`${PATH.UPDATE_PRODUCTS}/:id`} element={<EditProduct />} />
          <Route path={PATH.ADMIN_USERS} element={<TableUsers />} />
          <Route path={PATH.ADD_USERS} element={<AddUser />} />
        </Route>

        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTER} element={<Register />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
