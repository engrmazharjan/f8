import "./Profile.css";
import React, { Fragment } from "react";

const Profile = () => {
  return (
    <Fragment>
      <div
        id="content-body-height"
        className="content-body live-stream-content-body"
      >
        <div className="container-fluid">
          <h1 className="profile-title">Profile</h1>
          <div className="row">
            <div className="col-2 profile-sidebar-container">
              <ul className="profile-list">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11.021"
                    height="4.342"
                    viewBox="0 0 11.021 4.342"
                  >
                    <path
                      id="Shape"
                      d="M10.279,4.342H5.047a.742.742,0,1,1,0-1.483h5.232a.742.742,0,1,1,0,1.483Zm-2.6-2.857H.743A.743.743,0,1,1,.743,0H7.682a.743.743,0,0,1,0,1.485Z"
                      fill="#f5f5f5"
                    />
                  </svg>
                  <span className="overview-title">Overview</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.049"
                    height="16.958"
                    viewBox="0 0 13.049 16.958"
                  >
                    <path
                      id="Shape"
                      d="M12.387,16.958a.663.663,0,0,1-.662-.662,4.708,4.708,0,0,0-4.7-4.7H6.028a4.709,4.709,0,0,0-4.7,4.7A.662.662,0,0,1,0,16.3a6.035,6.035,0,0,1,6.028-6.027h.994A6.034,6.034,0,0,1,13.049,16.3.663.663,0,0,1,12.387,16.958ZM6.458,8.943A4.472,4.472,0,1,1,10.93,4.472,4.476,4.476,0,0,1,6.458,8.943Zm0-7.619A3.146,3.146,0,1,0,9.6,4.472,3.15,3.15,0,0,0,6.458,1.325Z"
                      fill="#f5f5f5"
                    />
                  </svg>
                  <span className="account-type-title">Account Type</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.543"
                    height="14.948"
                    viewBox="0 0 9.543 14.948"
                  >
                    <path
                      id="Icon_material-attach-money"
                      data-name="Icon material-attach-money"
                      d="M14.617,11.06c-2.128-.49-2.812-1-2.812-1.785,0-.905.947-1.536,2.531-1.536,1.669,0,2.287.706,2.344,1.744h2.072a3.442,3.442,0,0,0-3.009-3.164V4.5H12.93V6.294c-1.819.349-3.281,1.4-3.281,3,0,1.918,1.791,2.873,4.406,3.43,2.344.5,2.812,1.229,2.812,2,0,.573-.459,1.486-2.531,1.486-1.931,0-2.69-.764-2.794-1.744H9.48c.112,1.819,1.65,2.84,3.45,3.181v1.8h2.812V17.662c1.828-.307,3.281-1.246,3.281-2.948C19.023,12.356,16.745,11.55,14.617,11.06Z"
                      transform="translate(-9.48 -4.5)"
                      fill="#f5f5f5"
                    />
                  </svg>
                  <span className="get-money-title">Get Money</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.875"
                    height="16"
                    viewBox="0 0 14.875 16"
                  >
                    <path
                      id="Shape"
                      d="M6.625,16H3.749A3.754,3.754,0,0,1,0,12.251v-8.5A3.754,3.754,0,0,1,3.749,0H9.5a3.754,3.754,0,0,1,3.75,3.749.625.625,0,0,1-1.25,0,2.5,2.5,0,0,0-2.5-2.5H3.749a2.5,2.5,0,0,0-2.5,2.5v8.5a2.5,2.5,0,0,0,2.5,2.5H6.625a.625.625,0,1,1,0,1.25Zm1.031-3.5H4.594a.625.625,0,0,1,0-1.25H7.656a.625.625,0,0,1,0,1.25Zm4.562-1.563a2.656,2.656,0,1,1,2.657-2.656A2.659,2.659,0,0,1,12.218,10.937Zm0-4.062a1.406,1.406,0,1,0,1.407,1.406A1.407,1.407,0,0,0,12.218,6.875ZM7.656,10.094H4.594a.625.625,0,0,1,0-1.25H7.656a.625.625,0,0,1,0,1.25Zm0-2.375H4.594a.625.625,0,0,1,0-1.25H7.656a.625.625,0,0,1,0,1.25Z"
                      fill="#f5f5f5"
                    />
                  </svg>

                  <span className="privacy-policy-title">Privacy Policy</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                  >
                    <path
                      id="Shape"
                      d="M11.484,14H3.515A3.408,3.408,0,0,1,0,10.719V6.1A3.408,3.408,0,0,1,3.515,2.817H5.859a.569.569,0,0,1,.587.547.569.569,0,0,1-.587.547H3.515A2.272,2.272,0,0,0,1.172,6.1v4.621a2.272,2.272,0,0,0,2.344,2.188h7.969a2.273,2.273,0,0,0,2.344-2.188V7.575a.587.587,0,0,1,1.172,0v3.144A3.409,3.409,0,0,1,11.484,14Zm-.175-7.109A3.578,3.578,0,0,1,7.618,3.446,3.579,3.579,0,0,1,11.309,0,3.579,3.579,0,0,1,15,3.446,3.579,3.579,0,0,1,11.309,6.891Zm0-5.8A2.442,2.442,0,0,0,8.789,3.446,2.442,2.442,0,0,0,11.309,5.8a2.443,2.443,0,0,0,2.52-2.351A2.443,2.443,0,0,0,11.309,1.094Z"
                      fill="#f5f5f5"
                    />
                  </svg>

                  <span className="logout-title">Log Out</span>
                </li>
              </ul>
            </div>
            <div className="col-8 profile-form-container">
              <div className="input-file-container">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25.865"
                    height="20.693"
                    viewBox="0 0 25.865 20.693"
                  >
                    <path
                      id="Shape"
                      d="M23.279,20.693H2.586A2.59,2.59,0,0,1,0,18.105V6.467A2.589,2.589,0,0,1,2.586,3.88h3.1a1.153,1.153,0,0,0,1.022-.736l.8-2.408A1.149,1.149,0,0,1,8.535,0h8.8a1.149,1.149,0,0,1,1.021.736l.8,2.408a1.151,1.151,0,0,0,1.022.736h3.1a2.589,2.589,0,0,1,2.586,2.587V18.105A2.59,2.59,0,0,1,23.279,20.693ZM12.932,5.173A6.466,6.466,0,1,0,19.4,11.639,6.473,6.473,0,0,0,12.932,5.173Zm9.441,1.292a.9.9,0,1,0,.906.905A.906.906,0,0,0,22.373,6.465ZM12.932,15.52a3.88,3.88,0,1,1,3.88-3.881A3.884,3.884,0,0,1,12.932,15.52Z"
                      fill="#fff"
                    />
                  </svg>

                  <label htmlFor="filePicker">Click To Change Photo</label>
                  <input
                    accept="image/png, image/jpeg"
                    id="filePicker"
                    style={{ visibility: "hidden" }}
                    type="file"
                  ></input>
                </span>
              </div>

              <span className="profile-first-input-span">
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="first-name" placeholder="Ola" />
              </span>

              <span>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="last-name" placeholder="Boluwatife" />
              </span>

              <span>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Olaboluwatofezzy@ymail.com"
                />
              </span>

              <span>
                <label htmlFor="account-type">Account Type</label>
                <input type="text" name="account-type" placeholder="Trader" />
              </span>

              <span>
                <button>SAVE NEW CHANGES</button>
              </span>
              <hr />
              <hr
                style={{
                  border: "2px solid #000000",
                  width: "102.1%",
                }}
              />
              <hr />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
