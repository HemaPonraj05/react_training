import React from "react";

function Keys(props) {
  console.log("input ... ", props);
  let rowData = props.arrayInput.map(element => {
    return <td key={element.id}> {element.dept} </td>;
  });

  return (
    <div>
      <table border="1">
        <tr>{rowData}</tr>
      </table>
    </div>
  );
}

export default Keys;
