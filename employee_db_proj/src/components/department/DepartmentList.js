import React from "react";
import DepartmentCrudForm from "./DeparmentCrudForm";
import DepartmentDisplay from "./DepartmentDisplay";
import { Switch, Route } from "react-router-dom";
import AddDepartment from "./AddDepartment";

class DepartmentList extends React.Component {
  componentDidMount() {
    this.props.getDeptDetails("http://localhost:3004/departments");
  }
  componentWillReceiveProps(nextProps) {
    console.log("new props..", nextProps);
  }
  shouldComponentUpdate() {
    console.log("trueeee");
    return true;
  }
  componentDidUpdate() {
    console.log("updateee ", this.props);
  }
  render() {
    console.log("deptList props.. ", this.props);
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/department"
            render={() => {
              return (
                <div>
                  <DepartmentCrudForm deptListDetails={this.props} />
                  <DepartmentDisplay displayData={this.props} />
                </div>
              );
            }}
          />
          <Route
            path="/department/add"
            render={() => {
              return <AddDepartment addprops={this.props} />;
            }}
          />
          {/* <Route path="/department/modify" component={ModifyDepartment} /> */}
        </Switch>
        {/* <DepartmentCrudForm deptListDetails={this.props} />
        <DepartmentDisplay displayData={this.props} /> */}
      </div>
    );
  }
}

export default DepartmentList;
