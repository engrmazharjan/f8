import "./LiveStreaming.css";
import React, { Fragment } from "react";
import LiveStreamMainImage from "../../assets/images/live_stream_main_image.png";
import OnlinePerson from "../../assets/images/online_person.png";

const LiveStreaming = () => {
  return (
    <Fragment>
      <div
        id="content-body-height"
        className="content-body live-stream-content-body"
      >
        <div className="container-fluid">
          <div className="image-chat-container">
            <div className="left-image">
              <span className="time-views-container">
                <p className="time">00:46</p>
                <p className="views">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="82"
                    height="33"
                    viewBox="0 0 82 33"
                  >
                    <g
                      id="Group_3470"
                      data-name="Group 3470"
                      transform="translate(-978 -130)"
                    >
                      <path
                        id="Icon_awesome-eye"
                        data-name="Icon awesome-eye"
                        d="M28.943,13.468A16.214,16.214,0,0,0,14.559,4.5,16.217,16.217,0,0,0,.176,13.469a1.635,1.635,0,0,0,0,1.476,16.214,16.214,0,0,0,14.383,8.968,16.217,16.217,0,0,0,14.383-8.969A1.635,1.635,0,0,0,28.943,13.468ZM14.559,21.486a7.28,7.28,0,1,1,7.28-7.28A7.28,7.28,0,0,1,14.559,21.486Zm0-12.133a4.818,4.818,0,0,0-1.28.192A2.419,2.419,0,0,1,9.9,12.927a4.842,4.842,0,1,0,4.662-3.574Z"
                        transform="translate(978 132.557)"
                        fill="#f5f7fa"
                      />
                      <text
                        id="_178"
                        data-name="178"
                        transform="translate(1016 156)"
                        fill="#f5f7fa"
                        font-size="25"
                        font-family="Roboto-Bold, Roboto"
                        font-weight="700"
                      >
                        <tspan x="0" y="0">
                          579
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </p>
              </span>
              <img src={LiveStreamMainImage} alt="" />
            </div>
            <div className="right-chat-container">
              <div className="top-online-person">
                <span>
                  <img src={OnlinePerson} alt="" />
                  <p>Mazhar Jan.</p>
                </span>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                  >
                    <g
                      id="Group_3472"
                      data-name="Group 3472"
                      transform="translate(-1389 -149)"
                    >
                      <g id="Search" transform="translate(1389 149)">
                        <rect
                          id="Base"
                          width="55"
                          height="55"
                          rx="27.5"
                          fill="#09192e"
                        />
                      </g>
                      <path
                        id="Icon_metro-cancel"
                        data-name="Icon metro-cancel"
                        d="M18,1.928A15.429,15.429,0,1,0,33.428,17.357,15.429,15.429,0,0,0,18,1.928Zm0,27.964A12.536,12.536,0,1,1,30.535,17.357,12.536,12.536,0,0,1,18,29.892Zm4.821-20.25L18,14.464,13.178,9.642l-2.893,2.893,4.821,4.821-4.821,4.821,2.893,2.893L18,20.249l4.821,4.821,2.893-2.893-4.821-4.821,4.821-4.821Z"
                        transform="translate(1398.502 159.143)"
                        fill="#b1b1b1"
                      />
                    </g>
                  </svg>
                </p>
              </div>

              <div className="chat-container">
                <div className="single-chat">
                  <p className="person-name">Aqib Iqbal</p>
                  <p>Hey Mazhar, how are you. Is client's project ready???</p>
                </div>
                <div className="second-single-chat">
                  <p className="person-name">Mazhar Jan</p>
                  <p>
                    I'm doing well. Yes it's ready I've deployed the build, I'll
                    share the link with you.
                  </p>
                </div>
              </div>
              <span className="input-text-container">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Type message here..."
                  aria-label="Search"
                />
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="48"
                    viewBox="0 0 47 48"
                  >
                    <g
                      id="Send_Button"
                      data-name="Send Button"
                      transform="translate(0.498)"
                      opacity="0.92"
                    >
                      <rect
                        id="Rectangle_18"
                        data-name="Rectangle 18"
                        width="47"
                        height="48"
                        rx="15"
                        transform="translate(-0.498)"
                        fill="#50bb69"
                      />
                      <g
                        id="icon.send"
                        transform="translate(19.804 12.006) rotate(45)"
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
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LiveStreaming;
