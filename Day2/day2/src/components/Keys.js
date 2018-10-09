import React from "react";

function Keys(props) {
  console.log("input ... ", props);
  let rowData = props.arrayInput.map(element => {
    return (
      <tr>
        <td key={element.id}> {element.dept} </td>
      </tr>
    );
  });

  return (
    <div>
      <table border="1">{rowData}</table>
    </div>
  );
}

export default Keys;
