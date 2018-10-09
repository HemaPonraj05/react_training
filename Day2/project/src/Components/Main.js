import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import DepartmentList from "./DepartmentList";
import EmployeeList from "./EmployeeList";
class Main extends React.Component {
  render() {
    return (
      <section className="content">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/department" component={DepartmentList} />
          <Route path="/employee" component={EmployeeList} />
          <Route
            path="*"
            render={() => {
              return <h3 style={{ color: "red" }}> 404 - Page not found! </h3>;
            }}
          />
        </Switch>
      </section>
    );
  }
}
export default Main;
