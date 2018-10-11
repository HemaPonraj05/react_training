import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class DepartmentCrudForm extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      deleteId: 0
    });
    console.log("props from super", props);
    this.deleteDepartment = this.deleteDepartment.bind(this);
  }
  deleteDepartment() {
    let deptID = this.props.deptListDetails.deptId;
    console.log("depid.. ", deptID);
    if (!deptID) {
      alert("Please select department to delete!");
    } else {
      axios
        .delete(`http://localhost:3004/departments/${deptID}`)
        .then(response => {
          this.props.deptListDetails.getDeptDetails(
            "http://localhost:3004/departments"
          );
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }
  render() {
    console.log("deptcrud props.. ", this.props);
    return (
      <form action="">
        <h1>Departments</h1>
        <div>
          <Link to="/department/add">
            <input type="button" value="Create" />
          </Link>
          {/* <Link to="">
            <input type="button" value="Update" />
          </Link> */}
          <input type="button" value="Delete" onClick={this.deleteDepartment} />
        </div>
      </form>
    );
  }
}
export default DepartmentCrudForm;
