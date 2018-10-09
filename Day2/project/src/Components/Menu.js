import React from "react";
import { Link } from "react-router-dom";
class Menu extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div>
          <Link to="/department">Department</Link>
        </div>
        <div>
          <Link to="/employee">Employee</Link>
        </div>
        <div>
          <Link to="/logout">Logout</Link>
        </div>
      </nav>
    );
  }
}
export default Menu;
