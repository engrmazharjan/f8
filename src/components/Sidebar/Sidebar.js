import "./Sidebar.css";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserRoutes } from "../../routing/UserRoutes";
import GooglePlay from "../../assets/images/google-play-btn.png";
import AppStore from "../../assets/images/app-store-btn.png";
import UpgradeBtn from "../../assets/images/upgrade-btn.png";

const Sidebar = () => {
  const path = useLocation().pathname;
  const [NavigateSidebar, setNavigateSidebar] = useState(false);

  return (
    <Fragment>
      {/* <div className="d-flex flex-column sidebar-content-container"> */}
      <ul className="nav nav-pills flex-column mb-auto sidebar-content-container">
        {UserRoutes.filter(
          (route) => route.layout === "user" && route.parent
        ).map((item, index) => {
          const isActive = path === item.path;
          const isChildActive = path.includes(item.path);
          return (
            <li className="nav-item sidebar-list-item">
              <Link
                to={item.path}
                className={
                  isActive || isChildActive
                    ? "active nav-link sidebar-list-item-link"
                    : "nav-link sidebar-list-item-link"
                }
                // aria-current="page"
              >
                <span className="sidebar-list-item-icon">
                  {isActive || isChildActive ? item.activeIcon : item.icon}
                </span>
                <span
                  className="sidebar-list-item-text"
                  style={{ color: "#ffffff" }}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}

        <li className="upgrade-btn">
          <img src={UpgradeBtn} alt="" />
        </li>

        <li className="google-play-app-store-btn">
          <img className="play-store-btn" src={GooglePlay} alt="" />
          <img className="app-store-btn" src={AppStore} alt="" />
        </li>
      </ul>
      {/* </div> */}
    </Fragment>
  );
};

export default Sidebar;
