import React from "react";

class DepartmentRow extends React.Component {
  render() {
    console.log("dept row props... ", this.props);
    const { data, selectHandler } = this.props;
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>
          <input
            name="dept"
            type="radio"
            onClick={() => {
              selectHandler(data.id);
            }}
          />
        </td>
      </tr>
    );
  }
}

export default DepartmentRow;
