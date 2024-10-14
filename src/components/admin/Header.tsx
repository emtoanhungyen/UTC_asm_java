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
                <a className="nav-link" href={PATH.ADMIN}>
                  Admin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={PATH.ADMIN}>
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={PATH.ADMIN_PRODUCTS}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={PATH.ADMIN_USERS}>
                  Users
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
