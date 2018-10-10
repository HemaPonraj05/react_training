import React from "react";
class Display extends React.Component {
  render() {
    console.log("display props.. ", this.props);
    const { fetching, userDetails, error } = this.props;
    return (
      <div>
        {fetching && (
          <h3 style={{ color: "blue" }}>
            Please wait.. Details are being fetched...
          </h3>
        )}
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        {userDetails.name && (
          <ul style={{ color: "green" }}>
            <li>Name: {userDetails.name}</li>
            <li>Location: {userDetails.loc}</li>
            <li>
              Blog:
              {userDetails.blog}
            </li>
          </ul>
        )}
      </div>
    );
  }
}
export default Display;
