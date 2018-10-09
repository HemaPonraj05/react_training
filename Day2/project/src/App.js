import React from "react";
import Main from "./Components/Main";
import { Header } from "./Components/Header";
import Menu from "./Components/Menu";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
