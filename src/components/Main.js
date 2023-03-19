import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, starWarsPage} from "../utils/constants";
import {StarWarsContext} from "../utils/starWarsContext";

const Main = () => {
    return(
        <StarWarsContext.Consumer>
            {value => {
                switch (value.page) {
                    case aboutMePage: return (
                        <AboutMe/>
                    )
                    case starWarsPage: return (
                        <StarWars/>
                    )
                    case contactPage: return (
                        <Contact/>
                    )
                    default: return (
                        <Home/>
                    );
                }
            }}
        </StarWarsContext.Consumer>
    )

};

export default Main;