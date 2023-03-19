import React from "react";
import {
  aboutMePage,
  contactPage,
  homePage,
  starWarsPage,
} from "../utils/constants";

const Navigation = () => {
  return (
    <nav>
      <ul className="position-fixed list-unstyled d-inline">
        <li
          onClick={() => (window.location.hash = `#/${homePage}`)}
          className="border border-light rounded-pill btn btn-danger"
        >
          Home
        </li>
        <li
          onClick={() => (window.location.hash = `#/${aboutMePage}`)}
          className="border border-light rounded-pill btn btn-danger"
        >
          About me
        </li>
        <li
          onClick={() => (window.location.hash = `#/${starWarsPage}`)}
          className="border border-light rounded-pill btn btn-danger"
        >
          Star wars
        </li>
        <li
          onClick={() => (window.location.hash = `#/${contactPage}`)}
          className="border border-light rounded-pill btn btn-danger"
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
