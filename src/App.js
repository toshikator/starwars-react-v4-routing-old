import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import React, { Component } from "react";
import { StarWarsContext } from "./utils/starWarsContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: window.location.hash.substring(2),
    };
  }

  changeActivePage = (page) => {
    this.setState({
      activePage: page,
    });
  };

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.changeActivePage(window.location.hash.substring(2));
    });
  }

  render() {
    return (
      <div className={"container-fluid"}>
        <StarWarsContext.Provider
          value={{
            page: this.state.activePage,
            changePage: this.changeActivePage,
          }}
        >
          <Header />
          <Main />
        </StarWarsContext.Provider>

        <Footer />
      </div>
    );
  }
}

export default App;
