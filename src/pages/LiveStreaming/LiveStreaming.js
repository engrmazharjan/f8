import "./LiveStreaming.css";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LiveStreamImage1 from "../../assets/images/avatar/1.jpg";
import LiveStreamImage2 from "../../assets/images/avatar/2.jpg";
import LiveStreamImage3 from "../../assets/images/avatar/3.jpg";
import LiveStreamImage4 from "../../assets/images/avatar/4.jpg";
import LiveStreamImage5 from "../../assets/images/avatar/5.jpg";
import LiveStreamImage6 from "../../assets/images/avatar/6.jpg";
import LiveStreamImage7 from "../../assets/images/avatar/7.jpg";

const LiveStreaming = () => {
  return (
    <Fragment>
      <div
        id="content-body-height"
        className="content-body live-stream-content-body"
      >
        <div className="container-fluid live-stream-container-fluid">
          <div className="live-streams-top-header">
            <span className="live-streams-top-header-left">
              <h1>Live Streams</h1>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.523"
                  height="22.312"
                  viewBox="0 0 19.523 22.312"
                >
                  <path
                    id="Icon_metro-broadcast"
                    data-name="Icon metro-broadcast"
                    d="M14.26,6.112a5.578,5.578,0,0,1,4.009,9.457l-.349,2.026a6.973,6.973,0,1,0-7.321,0l-.349-2.026A5.578,5.578,0,0,1,14.26,6.112Zm-1.395,6.973a1.39,1.39,0,0,0-1.395,1.395v2.789a1.4,1.4,0,0,0,1.395,1.395V24.24h2.789V18.662a1.4,1.4,0,0,0,1.395-1.395V14.479a1.39,1.39,0,0,0-1.395-1.395H12.866ZM17.049,10.3a2.789,2.789,0,1,0-2.789,2.789A2.78,2.78,0,0,0,17.049,10.3ZM14.26,1.928a9.742,9.742,0,0,0-3.116,18.978l-.261-1.569a8.367,8.367,0,1,1,6.755,0l-.261,1.569A9.742,9.742,0,0,0,14.26,1.928Z"
                    transform="translate(-4.499 -1.928)"
                    fill="#fff"
                  />
                </svg>
                <span>Go Live</span>
              </button>
            </span>
            <span className="live-streams-top-header-right">
              <svg
                className="three-line"
                xmlns="http://www.w3.org/2000/svg"
                width="24.109"
                height="21.2"
                viewBox="0 0 24.109 21.2"
              >
                <g
                  id="Icon_ionic-ios-options"
                  data-name="Icon ionic-ios-options"
                  transform="translate(-3.375 -5.625)"
                >
                  <path
                    id="Path_1450"
                    data-name="Path 1450"
                    d="M17.939,26.141a2.322,2.322,0,0,1,4.254,0h4.364a.93.93,0,0,1,.927.927h0a.93.93,0,0,1-.927.927H22.193a2.322,2.322,0,0,1-4.254,0H4.3a.93.93,0,0,1-.927-.927h0a.93.93,0,0,1,.927-.927Z"
                    transform="translate(0 -2.561)"
                    fill="#707070"
                  />
                  <path
                    id="Path_1451"
                    data-name="Path 1451"
                    d="M8.666,16.578a2.322,2.322,0,0,1,4.254,0H26.557a.93.93,0,0,1,.927.927h0a.93.93,0,0,1-.927.927H12.92a2.322,2.322,0,0,1-4.254,0H4.3a.93.93,0,0,1-.927-.927h0a.93.93,0,0,1,.927-.927Z"
                    transform="translate(0 -1.281)"
                    fill="#707070"
                  />
                  <path
                    id="Path_1452"
                    data-name="Path 1452"
                    d="M17.939,7.016a2.322,2.322,0,0,1,4.254,0h4.364a.93.93,0,0,1,.927.927h0a.93.93,0,0,1-.927.927H22.193a2.322,2.322,0,0,1-4.254,0H4.3a.93.93,0,0,1-.927-.927h0A.93.93,0,0,1,4.3,7.016Z"
                    fill="#707070"
                  />
                </g>
              </svg>
              <div className="input-container">
                <span>
                  <svg
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
                        <feFlood flood-color="#1466cc" flood-opacity="0.161" />
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
                        <g id="ic-actions-search" transform="translate(16 13)">
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
                </span>
                <input type="text" placeholder="Search Streams" />
              </div>
            </span>
          </div>
          <div className="row">
            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage1} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$5.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage2} alt="" className="top-image" />
                <h4 className="name">Coffee Mug</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage3} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$7.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage4} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage5} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$8.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage6} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage7} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage1} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$5.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage2} alt="" className="top-image" />
                <h4 className="name">Coffee Mug</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage3} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$7.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage4} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage5} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$8.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage6} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage7} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage1} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$5.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage2} alt="" className="top-image" />
                <h4 className="name">Coffee Mug</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage3} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$7.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage4} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage5} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$8.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage6} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage7} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage1} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$5.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage2} alt="" className="top-image" />
                <h4 className="name">Coffee Mug</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage3} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$7.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage4} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage5} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$8.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage6} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage7} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage1} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$5.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage2} alt="" className="top-image" />
                <h4 className="name">Coffee Mug</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage3} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$7.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage4} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage5} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>$8.00</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage6} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>

            <div className="live-stream-component-container">
              <div className="live-stream-component-content">
                <img src={LiveStreamImage7} alt="" className="top-image" />
                <h4 className="name">Coffee</h4>
                <span>Getting Things Started</span>
                <span className="cost-button-container">
                  <p>Free</p>
                  <Link to="/user/live/streaming/in-person">
                    <button>View</button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LiveStreaming;
