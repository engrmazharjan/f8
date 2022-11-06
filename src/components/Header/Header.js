import "./Header.css";
import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/f8_logo.png";
import DarkLight from "../../assets/images/dark_light.png";
import ProfileImage from "../../assets/images/profile/1.png";

const Header = () => {
  return (
    <Fragment>
      <header className="p-3 text-white header-header-container">
        {/* <div className="container"> */}
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start content">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 header-logo-container">
            <li>
              <Link
                href="/user/discover"
                // className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <img
                  style={{ width: "70px", height: "90px" }}
                  src={logo}
                  alt=""
                />
              </Link>
            </li>
            <li className="header-left-button-container">
              <Link to="/user/discover" className="nav-link px-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="216"
                  height="59"
                  viewBox="0 0 216 59"
                >
                  <g
                    id="Group_3492"
                    data-name="Group 3492"
                    transform="translate(-448 -22)"
                  >
                    <g id="Search" transform="translate(447.934 22)">
                      <rect
                        id="Base"
                        width="216"
                        height="59"
                        rx="11"
                        transform="translate(0.066)"
                        fill="#fb0"
                      />
                    </g>
                    <text
                      id="Jackson_D."
                      data-name="Jackson D."
                      transform="translate(485 57)"
                      font-size="16"
                      font-family="Poppins-Regular, Poppins"
                    >
                      <tspan x="0" y="0">
                        Upgrade Account
                      </tspan>
                    </text>
                  </g>
                </svg>
              </Link>
            </li>
          </ul>

          {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form> */}

          <div className="text-end">
            <img className="dark_light" src={DarkLight} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="62"
              viewBox="0 0 62 62"
            >
              <g
                id="Group_3493"
                data-name="Group 3493"
                transform="translate(-1661 -18)"
              >
                <circle
                  id="Ellipse_4"
                  data-name="Ellipse 4"
                  cx="31"
                  cy="31"
                  r="31"
                  transform="translate(1661 18)"
                  fill="#fafafa"
                />
                <g id="noun_Search_1542891" transform="translate(1678 34.811)">
                  <g id="Group_3" data-name="Group 3">
                    <path
                      id="Path_4"
                      data-name="Path 4"
                      d="M19.4,34.008A12.932,12.932,0,0,0,27.822,30.9l4.258,4.258a1.309,1.309,0,0,0,1.834-1.867L29.657,29A12.836,12.836,0,0,0,32.408,21a13,13,0,1,0-13,13Zm0-23.388A10.384,10.384,0,1,1,9.02,21,10.387,10.387,0,0,1,19.4,10.62Z"
                      transform="translate(-6.4 -8)"
                      fill="#2d3f7b"
                      stroke="#2d3f7b"
                      strokeWidth="2"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="62"
              viewBox="0 0 62 62"
            >
              <g
                id="Group_3494"
                data-name="Group 3494"
                transform="translate(-1739 -18)"
              >
                <circle
                  id="Ellipse_7"
                  data-name="Ellipse 7"
                  cx="31"
                  cy="31"
                  r="31"
                  transform="translate(1739 18)"
                  fill="#fafafa"
                />
                <g
                  id="noun_notification_2184960"
                  transform="translate(1754.964 31.519)"
                >
                  <g id="Group_2" data-name="Group 2" transform="translate(0)">
                    <g id="Group_1" data-name="Group 1">
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        d="M38.1,26.575a11.172,11.172,0,0,0-8.378,10.818v7.446a1.243,1.243,0,0,1-1.24,1.242,2.482,2.482,0,1,0,0,4.965H53.3a2.482,2.482,0,1,0,0-4.965,1.238,1.238,0,0,1-1.24-1.242V37.393a11.174,11.174,0,0,0-8.378-10.818V25.293a2.793,2.793,0,1,0-5.585,0ZM36.55,52.287h8.688a4.344,4.344,0,0,1-8.688,0Z"
                        transform="translate(-26 -22.5)"
                        fill="#2d3f7b"
                        fill-rule="evenodd"
                      />
                    </g>
                  </g>
                </g>
                <circle
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx="7.5"
                  cy="7.5"
                  r="7.5"
                  transform="translate(1779 24.349)"
                  fill="#f31954"
                />
              </g>
            </svg>
            <div
              className="profile-image"
              style={{
                backgroundImage: `url(${ProfileImage})`,
              }}
            ></div>
          </div>
        </div>
        {/* </div> */}
      </header>
    </Fragment>
  );
};

export default Header;
