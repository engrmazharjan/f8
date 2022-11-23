import "./Messaging.css";
import React, { Fragment } from "react";
import MessagingImage1 from "../../assets/images/avatar/1.jpg";
import MessagingImage2 from "../../assets/images/avatar/2.jpg";
import MessagingImage3 from "../../assets/images/avatar/3.jpg";
import MessagingImage4 from "../../assets/images/avatar/4.jpg";
import MessagingImage5 from "../../assets/images/avatar/5.jpg";
import MessagingImage6 from "../../assets/images/avatar/6.jpg";
import MessagingImage7 from "../../assets/images/avatar/7.jpg";
import MessagingImage8 from "../../assets/images/unsplash1.jpg";
import MessagingImage9 from "../../assets/images/unsplash2.jpg";

const Messaging = () => {
  return (
    <Fragment>
      <div
        id="content-body-height"
        className="content-body live-stream-content-body"
      >
        <div className="container-fluid live-stream-container-fluid">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-5 side-bar-custom-style">
              <h1 className="chat-title">Chat</h1>
              <div className="my-profile-container">
                <img src={MessagingImage2} alt="" />
                <div className="details">
                  <h3>George Tarielashvili</h3>
                  <span className="client">Client</span>
                  <span className="online">
                    <p>Online</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6.868"
                      height="3.934"
                      viewBox="0 0 6.868 3.934"
                    >
                      <path
                        id="Path_84"
                        data-name="Path 84"
                        d="M9503.045-3793.5l2.728,2.727,2.727-2.727"
                        transform="translate(-9502.338 3794.207)"
                        fill="none"
                        stroke="#4b5155"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                    </svg>
                  </span>
                </div>
                <svg
                  className="settings-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.136"
                  height="18.136"
                  viewBox="0 0 18.136 18.136"
                >
                  <g
                    id="Group_3503"
                    data-name="Group 3503"
                    transform="translate(-320.257 -120.662)"
                  >
                    <circle
                      id="Ellipse_83"
                      data-name="Ellipse 83"
                      cx="2.269"
                      cy="2.269"
                      r="2.269"
                      transform="translate(327.057 127.461)"
                      fill="none"
                      stroke="#afbbc6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Path_69"
                      data-name="Path 69"
                      d="M14.914,11.587a1.248,1.248,0,0,0,.25,1.376l.045.045a1.513,1.513,0,1,1-2.14,2.14l-.045-.045A1.258,1.258,0,0,0,10.891,16v.129a1.512,1.512,0,1,1-3.025,0v-.068a1.248,1.248,0,0,0-.817-1.142,1.248,1.248,0,0,0-1.376.25l-.045.045a1.513,1.513,0,1,1-2.14-2.14l.045-.045a1.258,1.258,0,0,0-.892-2.132H2.512a1.512,1.512,0,0,1,0-3.025H2.58A1.248,1.248,0,0,0,3.722,7.05a1.248,1.248,0,0,0-.25-1.376l-.045-.045a1.513,1.513,0,1,1,2.14-2.14l.045.045a1.248,1.248,0,0,0,1.376.25h.06a1.248,1.248,0,0,0,.756-1.142V2.512a1.512,1.512,0,1,1,3.025,0V2.58a1.258,1.258,0,0,0,2.132.892l.045-.045a1.513,1.513,0,1,1,2.14,2.14l-.045.045a1.248,1.248,0,0,0-.25,1.376v.06A1.248,1.248,0,0,0,16,7.806h.129a1.512,1.512,0,1,1,0,3.025h-.068A1.248,1.248,0,0,0,14.914,11.587Z"
                      transform="translate(320.007 120.412)"
                      fill="none"
                      stroke="#afbbc6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </div>

              <div className="left-list-container">
                <h4>Active Chats</h4>
                <ul className="left-list">
                  <li className="input-list-item">
                    <input type="text" placeholder="Search People" />
                    <svg
                      id="search-24px"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.954"
                      height="24.954"
                      viewBox="0 0 24.954 24.954"
                    >
                      <path
                        id="Path_67"
                        data-name="Path 67"
                        d="M16,14.437h-.821l-.291-.281a6.769,6.769,0,1,0-.728.728l.281.291V16l2.824,2.795,1.549-1.549Zm-6.239,0a4.679,4.679,0,1,1,4.679-4.679A4.673,4.673,0,0,1,9.758,14.437Z"
                        transform="translate(1.572 1.581)"
                        fill="#afbbc6"
                      />
                      <path
                        id="Path_68"
                        data-name="Path 68"
                        d="M0,0H24.954V24.954H0Z"
                        fill="none"
                      />
                    </svg>
                  </li>
                  <li className="active-list-item">
                    <img src={MessagingImage3} alt="" />
                    <div className="name-message">
                      <h3>Franky Schmidt</h3>
                      <span>Me: What does this dummy…</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                    >
                      <ellipse
                        id="Ellipse_73"
                        data-name="Ellipse 73"
                        cx="10"
                        cy="10.5"
                        rx="10"
                        ry="10.5"
                        fill="#76c00d"
                      />
                      <text
                        id="_3"
                        data-name="3"
                        transform="translate(10 14)"
                        fill="#fff"
                        font-size="12"
                        font-family="SegoeUI, Segoe UI"
                      >
                        <tspan x="-3.234" y="0">
                          3
                        </tspan>
                      </text>
                    </svg>
                  </li>
                  <li className="typing-list-item">
                    <img src={MessagingImage4} alt="" />
                    <div className="name-message">
                      <h3>Sasha Cohen</h3>
                      <span>Typing …</span>
                    </div>
                    <span className="time">08:05</span>
                  </li>
                  <li className="typing-list-item">
                    <img src={MessagingImage5} alt="" />
                    <div className="name-message">
                      <h3>Sasha Cohen</h3>
                      <span>Typing …</span>
                    </div>
                    <span className="time">08:05</span>
                  </li>
                  <li className="typing-list-item">
                    <img src={MessagingImage6} alt="" />
                    <div className="name-message">
                      <h3>Sasha Cohen</h3>
                      <span>Typing …</span>
                    </div>
                    <span className="time">08:05</span>
                  </li>
                  <li className="typing-list-item">
                    <img src={MessagingImage7} alt="" />
                    <div className="name-message">
                      <h3>Sasha Cohen</h3>
                      <span>Typing …</span>
                    </div>
                    <span className="time">08:05</span>
                  </li>
                  <li className="typing-list-item">
                    <img src={MessagingImage2} alt="" />
                    <div className="name-message">
                      <h3>Sasha Cohen</h3>
                      <span>Typing …</span>
                    </div>
                    <span className="time">08:05</span>
                  </li>
                  <li className="typing-list-item">
                    <img src={MessagingImage1} alt="" />
                    <div className="name-message">
                      <h3>Sasha Cohen</h3>
                      <span>Typing …</span>
                    </div>
                    <span className="time">08:05</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-7 col-sm-7 chat-custom-style">
              <div className="messages-top-header-right">
                <div className="left-image-name">
                  <img src={MessagingImage3} alt="" width={55} height={55} />
                  <span>Franky Schmidt</span>
                </div>
                <div className="right-buttons">
                  <button className="voice-chat-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.991"
                      height="18.992"
                      viewBox="0 0 18.991 18.992"
                    >
                      <path
                        id="phone_1_"
                        data-name="phone (1)"
                        d="M19.6,15.095v2.633a1.757,1.757,0,0,1-1.917,1.755A17.425,17.425,0,0,1,10.1,16.788a17.131,17.131,0,0,1-5.276-5.266,17.347,17.347,0,0,1-2.7-7.609A1.757,1.757,0,0,1,3.869,2H6.507A1.758,1.758,0,0,1,8.266,3.51a11.251,11.251,0,0,0,.616,2.466,1.753,1.753,0,0,1-.4,1.852L7.369,8.942a14.056,14.056,0,0,0,5.276,5.266l1.117-1.115a1.761,1.761,0,0,1,1.856-.395,11.31,11.31,0,0,0,2.471.614A1.756,1.756,0,0,1,19.6,15.095Z"
                        transform="translate(-1.361 -1.25)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>Voice Chat</span>
                  </button>
                  <button className="video-call-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.167"
                      height="15.288"
                      viewBox="0 0 23.167 15.288"
                    >
                      <g id="video" transform="translate(0.75 0.75)">
                        <path
                          id="Path_74"
                          data-name="Path 74"
                          d="M24.426,7,16,11.487l8.426,4.487Z"
                          transform="translate(-2.759 -4.593)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                        <rect
                          id="Rectangle_14"
                          data-name="Rectangle 14"
                          width="13.241"
                          height="13.788"
                          rx="2"
                          transform="translate(0 0)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                    <span>Video Call</span>
                  </button>
                </div>
              </div>

              {/* Chat Section Start */}
              <div className="chat-section-container">
                {/* <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6"></div>
                </div> */}

                <div className="my-reply">
                  <img src={MessagingImage2} alt="" />
                  <p className="my-reply-small-top">Hello Franky!</p>
                  <p className="my-reply-large-top">How are you doing today?</p>
                  <span>09:35</span>
                </div>

                <div className="sender">
                  <img src={MessagingImage3} alt="" />
                  <p>Hi George! Nice to hear you again!</p>
                  <p>
                    I’m fine, thank you! And what about you? Is everything ok?
                  </p>
                  <span>09:42</span>
                </div>

                <div className="my-reply">
                  <img src={MessagingImage2} alt="" />
                  <p className="my-reply-small">Yep, thanks!</p>
                  <p className="my-reply-medium">May I ask you a favour?</p>
                  <p className="my-reply-long">
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry Lorem Ipsum has been the
                    industry’s standard dummy text ever since the 1500s when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book it has?
                  </p>
                  <p className="my-reply-large">
                    What does this dummy text mean?
                  </p>
                  <span>09:56</span>
                </div>

                <div className="typing">
                  <p>Franky is typing...</p>
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Enter your message here" />
                  <span className="svgs-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                    >
                      <g id="smile" transform="translate(1 1)">
                        <circle
                          id="Ellipse_87"
                          data-name="Ellipse 87"
                          cx="10.5"
                          cy="10.5"
                          r="10.5"
                          fill="none"
                          stroke="#afbbc6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                        <path
                          id="Path_77"
                          data-name="Path 77"
                          d="M8,14a5.614,5.614,0,0,0,4.159,2.08A5.614,5.614,0,0,0,16.318,14"
                          transform="translate(-1.599 -1.881)"
                          fill="none"
                          stroke="#afbbc6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <line
                          id="Line_3"
                          data-name="Line 3"
                          transform="translate(8 7)"
                          fill="none"
                          stroke="#afbbc6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <line
                          id="Line_4"
                          data-name="Line 4"
                          transform="translate(14 7)"
                          fill="none"
                          stroke="#afbbc6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.209"
                      height="22.795"
                      viewBox="0 0 23.209 22.795"
                    >
                      <path
                        id="paperclip"
                        d="M22.8,11.137l-9.832,9.272a6.7,6.7,0,0,1-9.083,0,5.817,5.817,0,0,1,0-8.566l9.832-9.272a4.466,4.466,0,0,1,6.055,0,3.878,3.878,0,0,1,0,5.711L9.927,17.554a2.233,2.233,0,0,1-3.028,0,1.939,1.939,0,0,1,0-2.855l9.083-8.556"
                        transform="translate(-1.002 -0.388)"
                        fill="none"
                        stroke="#afbbc6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="47"
                      height="48"
                      viewBox="0 0 47 48"
                    >
                      <g
                        id="Send_Button"
                        data-name="Send Button"
                        transform="translate(0.001)"
                      >
                        <rect
                          id="Rectangle_18"
                          data-name="Rectangle 18"
                          width="47"
                          height="48"
                          rx="23"
                          transform="translate(-0.001)"
                          fill="#50bb69"
                        />
                        <g
                          id="icon.send"
                          transform="translate(20.302 11.844) rotate(45)"
                        >
                          <line
                            id="Line_2"
                            data-name="Line 2"
                            x1="9.195"
                            y2="9.195"
                            transform="translate(9.521)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                          <path
                            id="Path_76"
                            data-name="Path 76"
                            d="M18.716,0,14.862,18.716,9.521,9.2,0,3.854Z"
                            transform="translate(0 0)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              {/* Chat Section End */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Messaging;
