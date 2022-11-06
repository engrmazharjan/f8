import "./Sidebar.css";
import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserRoutes } from "../../routing/UserRoutes";

const Sidebar = () => {
  const path = useLocation().pathname;

  return (
    <Fragment>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#home" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
      </div>

      <div className="deznav">
        <ul className="metismenu" id="menu">
          {UserRoutes.filter(
            (route) => route.layout === "user" && route.parent
          ).map((item, index) => {
            const isActive = path === item.path;
            const isChildActive = path.includes(item.path);
            return (
              <li
                className={
                  isActive || isChildActive
                    ? "mm-active active-no-child"
                    : "ai-icon"
                }
                key={index}
              >
                <Link className="ai-icon mm-active" to={item.path}>
                  <div style={{ height: 5 }}></div>
                  {isActive || isChildActive ? item.activeIcon : item.icon}
                  {/* <br /> */}
                  <span className="nav-text">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
