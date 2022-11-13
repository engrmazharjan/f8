import "./TradingGroups.css";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import TradingScreenImage1 from "../../assets/images/avatar/1.jpg";
import TradingScreenImage2 from "../../assets/images/avatar/2.jpg";
import TradingScreenImage3 from "../../assets/images/avatar/3.jpg";
import TradingScreenImage4 from "../../assets/images/avatar/4.jpg";
import TradingScreenImage5 from "../../assets/images/avatar/5.jpg";
import TradingScreenImage6 from "../../assets/images/avatar/6.jpg";
import TradingScreenImage7 from "../../assets/images/avatar/7.jpg";

const TradingGroups = () => {
  const [Forex, setForex] = useState(false);
  const [Crypto, setCrypto] = useState(true);
  const [Binary, setBinary] = useState(false);
  const [InputToggler, setInputToggler] = useState(false);
  const ForexFunction = () => {
    setForex(true);
    setCrypto(false);
    setBinary(false);
  };
  const CryptoFunction = () => {
    setForex(false);
    setCrypto(true);
    setBinary(false);
  };
  const BinaryFunction = () => {
    setForex(false);
    setCrypto(false);
    setBinary(true);
  };
  return (
    <Fragment>
      <div
        id="content-body-height"
        className="content-body trading-groups-content-body"
      >
        <div className="container-fluid trading-groups-container-fluid">
          <div className="trading-groups-top-header">
            <span className="trading-groups-top-header-left">
              <h1>Trading Groups</h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.187"
                  height="28.187"
                  viewBox="0 0 28.187 28.187"
                >
                  <g
                    id="Icon_feather-plus-circle"
                    data-name="Icon feather-plus-circle"
                    transform="translate(-1.5 -1.5)"
                  >
                    <path
                      id="Path_1460"
                      data-name="Path 1460"
                      d="M28.187,15.594A12.594,12.594,0,1,1,15.594,3,12.594,12.594,0,0,1,28.187,15.594Z"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_1461"
                      data-name="Path 1461"
                      d="M18,12V22.075"
                      transform="translate(-2.406 -1.444)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                    <path
                      id="Path_1462"
                      data-name="Path 1462"
                      d="M12,18H22.075"
                      transform="translate(-1.444 -2.406)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </g>
                </svg>

                <span>Create Group</span>
              </button>
            </span>
            <div
              className="btn-group button-group-container"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className={`btn ${
                  Forex ? "forex-active-button" : "forex-button"
                }`}
                onClick={ForexFunction}
              >
                Forex
              </button>
              <button
                type="button"
                className={`btn ${
                  Crypto ? "crypto-active-button" : "crypto-button"
                }`}
                onClick={CryptoFunction}
              >
                Crypto
              </button>
              <button
                type="button"
                className={`btn ${
                  Binary ? "binary-active-button" : "binary-button"
                }`}
                onClick={BinaryFunction}
              >
                Binary
              </button>
            </div>

            <span className="trading-groups-top-header-right">
              <div className="trading-group-input-container">
                <span>
                  {!InputToggler && (
                    <svg
                      onClick={() => setInputToggler(true)}
                      className="click-to-show-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="170"
                      height="170"
                      viewBox="0 0 170 170"
                    >
                      <defs>
                        <filter
                          id="search"
                          x="0"
                          y="0"
                          width="170"
                          height="170"
                          filterUnits="userSpaceOnUse"
                        >
                          <feOffset dy="25" input="SourceAlpha" />
                          <feGaussianBlur stdDeviation="20" result="blur" />
                          <feFlood flood-opacity="0.031" />
                          <feComposite operator="in" in2="blur" />
                          <feComposite in="SourceGraphic" />
                        </filter>
                        <filter
                          id="button1"
                          x="21"
                          y="11"
                          width="128"
                          height="128"
                          filterUnits="userSpaceOnUse"
                        >
                          <feOffset dy="15" input="SourceAlpha" />
                          <feGaussianBlur stdDeviation="15" result="blur-2" />
                          <feFlood
                            flood-color="#1466cc"
                            flood-opacity="0.161"
                          />
                          <feComposite operator="in" in2="blur-2" />
                          <feComposite in="SourceGraphic" />
                        </filter>
                      </defs>
                      <g
                        id="Group_3403"
                        data-name="Group 3403"
                        transform="translate(-1778 -97)"
                      >
                        <g
                          id="music_sm"
                          transform="translate(1629.986 132.008)"
                        >
                          <g
                            transform="matrix(1, 0, 0, 1, 148.01, -35.01)"
                            filter="url(#search)"
                          >
                            <rect
                              id="search-2"
                              data-name="search"
                              width="50"
                              height="50"
                              rx="25"
                              transform="translate(60 35)"
                              fill="#fff"
                            />
                          </g>
                          <g
                            id="button3"
                            transform="translate(210.013 6.992)"
                            // style="isolation: isolate"
                          >
                            <g
                              id="Group_3402"
                              data-name="Group 3402"
                              transform="translate(0 -2)"
                            >
                              <g
                                transform="matrix(1, 0, 0, 1, -62, -40)"
                                filter="url(#button1)"
                              >
                                <path
                                  id="button1-2"
                                  data-name="button1"
                                  d="M19,0A19,19,0,1,1,0,19,19,19,0,0,1,19,0Z"
                                  transform="translate(66 41)"
                                  fill="#ff4246"
                                />
                              </g>
                              <g
                                id="ic-actions-search"
                                transform="translate(16 13)"
                              >
                                <rect
                                  id="Rectangle_50"
                                  data-name="Rectangle 50"
                                  width="15"
                                  height="15"
                                  fill="none"
                                />
                                <g id="Layer" transform="translate(1.818 1.68)">
                                  <g
                                    id="Vrstva_92"
                                    data-name="Vrstva 92"
                                    transform="translate(0 0)"
                                  >
                                    <path
                                      id="Path_107"
                                      data-name="Path 107"
                                      d="M9.885,2.13A5.036,5.036,0,0,0,6.026,10.4l-2.4,2.4a.632.632,0,1,0,.894.894l2.424-2.443a4.98,4.98,0,0,0,2.934.951,5.036,5.036,0,0,0,0-10.072Zm0,8.813a3.777,3.777,0,1,1,3.777-3.777,3.777,3.777,0,0,1-3.777,3.777Z"
                                      transform="translate(-3.436 -2.13)"
                                      fill="#fff"
                                      fill-rule="evenodd"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  )}

                  {InputToggler && (
                    <svg
                      onClick={() => setInputToggler(false)}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="128"
                      height="128"
                      viewBox="0 0 128 128"
                    >
                      <defs>
                        <filter
                          id="button1"
                          x="0"
                          y="0"
                          width="128"
                          height="128"
                          filterUnits="userSpaceOnUse"
                        >
                          <feOffset dy="15" input="SourceAlpha" />
                          <feGaussianBlur stdDeviation="15" result="blur" />
                          <feFlood
                            flood-color="#1466cc"
                            flood-opacity="0.161"
                          />
                          <feComposite operator="in" in2="blur" />
                          <feComposite in="SourceGraphic" />
                        </filter>
                      </defs>
                      <g
                        id="button3"
                        transform="translate(41 31)"
                        // style="isolation: isolate"
                      >
                        <g
                          id="Group_3402"
                          data-name="Group 3402"
                          transform="translate(0 -2)"
                        >
                          <g
                            transform="matrix(1, 0, 0, 1, -41, -29)"
                            filter="url(#button1)"
                          >
                            <path
                              id="button1-2"
                              data-name="button1"
                              d="M19,0A19,19,0,1,1,0,19,19,19,0,0,1,19,0Z"
                              transform="translate(45 30)"
                              fill="#ff4246"
                            />
                          </g>
                          <g
                            id="ic-actions-search"
                            transform="translate(16 13)"
                          >
                            <rect
                              id="Rectangle_50"
                              data-name="Rectangle 50"
                              width="15"
                              height="15"
                              fill="none"
                            />
                            <g id="Layer" transform="translate(1.818 1.68)">
                              <g
                                id="Vrstva_92"
                                data-name="Vrstva 92"
                                transform="translate(0 0)"
                              >
                                <path
                                  id="Path_107"
                                  data-name="Path 107"
                                  d="M9.885,2.13A5.036,5.036,0,0,0,6.026,10.4l-2.4,2.4a.632.632,0,1,0,.894.894l2.424-2.443a4.98,4.98,0,0,0,2.934.951,5.036,5.036,0,0,0,0-10.072Zm0,8.813a3.777,3.777,0,1,1,3.777-3.777,3.777,3.777,0,0,1-3.777,3.777Z"
                                  transform="translate(-3.436 -2.13)"
                                  fill="#fff"
                                  fill-rule="evenodd"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  )}
                </span>
                {InputToggler && (
                  <input type="text" placeholder="Search Group" />
                )}
              </div>
            </span>
          </div>
          {Forex && (
            <div className="row">
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
            </div>
          )}

          {Crypto && (
            <div className="row">
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Gerry Mavin</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Tod Macker</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Handy Parsca</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$59.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Blue Hunger</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Martain Belly</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$15.00/w</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Hetlar Hummer</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Grandy Benson</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$350.00/y</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Gerry Mavin</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Tod Macker</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Handy Parsca</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$59.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Blue Hunger</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Martain Belly</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$15.00/w</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Hetlar Hummer</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Grandy Benson</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$350.00/y</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Gerry Mavin</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Tod Macker</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Handy Parsca</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$59.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Blue Hunger</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Martain Belly</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$15.00/w</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Hetlar Hummer</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Grandy Benson</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$350.00/y</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Gerry Mavin</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Tod Macker</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Handy Parsca</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$59.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Blue Hunger</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Martain Belly</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$15.00/w</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Hetlar Hummer</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>Free</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Grandy Benson</h4>
                  <span>Getting Things Started</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$350.00/y</p>
                  </span>
                </div>
              </div>
            </div>
          )}

          {Binary && (
            <div className="row">
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage7} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage6} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage5} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage4} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage3} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage2} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
              <div className="trading-groups-component-container">
                <div className="trading-groups-component-content">
                  <img src={TradingScreenImage1} alt="" className="top-image" />
                  <h4 className="name">Forex Screen</h4>
                  <span>Forex screen data will be here</span>
                  <span className="cost-button-container">
                    <Link to="/user/trading/groups">
                      <button>Join</button>
                    </Link>
                    <p>$10.00/m</p>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default TradingGroups;
