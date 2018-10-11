import React from "react";
import DepartmentRow from "./DepartmentRow";
class DepartmentDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectId: 0
    };
    //this.selectDepartment = this.selectDepartment.bind(this);
  }
  selectDepartment(id) {
    this.setState({ selectId: id });
  }
  render() {
    console.log("deptdisplay props.. ", this.props.displayData);
    const jsx = this.props.displayData.deptDetails.map(element => {
      return (
        <DepartmentRow
          key={element.id}
          data={element}
          selectHandler={this.props.displayData.selectedDeptId}
        />
        // <tr key={element.id}>
        //   <td>{element.id}</td>
        //   <td>{element.name}</td>
        //   <td>
        //     <input type="radio" value={element.id} />
        //   </td>
        // </tr>
      );
    });
    return (
      <div>
        <table id="tab">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>{jsx}</tbody>
        </table>
      </div>
    );
  }
}
export default DepartmentDisplay;
