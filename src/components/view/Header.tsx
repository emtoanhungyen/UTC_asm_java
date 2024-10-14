import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../routers/path";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong>
              <span className="text-success">Eco</span>
              <span>Love</span>
              <span className="text-success"></span>
            </strong>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href={PATH.HOME}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={PATH.CATEGORY}>
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse justify-content-end">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-1 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item pt-4">
                <Link className="nav-link" to="/login">
                  Sign in
                </Link>
              </li> 
              <li className="nav-item pt-4">
                <Link className="nav-link" to="/register">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <div id="basket-overview" className="d-none d-lg-block">
                  <a
                    href={PATH.CART}
                    className="btn btn-primary navbar-btn bg-success my-4"
                  >
                    <i className="fa fa-shopping-cart"></i>
                    <span> Items in cart</span>
                  </a>
                  <a
                    href={PATH.ADMIN}
                    className="btn btn-primary navbar-btn bg-success my-4 ml-3"
                  >
                    <span>ADMIN</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
