import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="">
          <div class="form-input">
            <label>Username:</label>
            <input type="text" />
          </div>

          <div className="form-input">
            <label>Password:</label>
            <input type="password" />
          </div>

          <div className="form-input">
            <input type="button" value="Login" />
            <input type="button" value="Reset" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
