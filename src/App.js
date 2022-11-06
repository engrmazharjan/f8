import "./App.css";
import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import User from "./layout/User/User";
import { UserRoutes } from "./routing/UserRoutes";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path={"/user"} element={<User />}>
            {UserRoutes &&
              UserRoutes.filter((routes) => routes.layout === "user").map(
                (UserRoutes) => {
                  return (
                    <Route
                      key="{user}"
                      path={UserRoutes.path.split("/user/").pop()}
                      element={UserRoutes.component}
                    />
                  );
                }
              )}
          </Route>
          {/* <Route path={"/login"} element={<Login />} /> */}
          {/* <Route path={"/register"} element={<Register />} /> */}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
